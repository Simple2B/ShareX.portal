from uuid import uuid4

from fastapi import APIRouter, Request, HTTPException, status

from app.schemas import BaseResponsePydantic
from app.models import User, Content


def exception(msg: str):
    return HTTPException(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        detail=msg,
        headers={"WWW-Authenticate": "Bearer"},
    )


async def parse_sharex_request(request: Request):
    form = await request.form()
    check_file = form.get("sharex", None)
    api_key = form.get("api_key", None)
    content_type = form.get("content_type", None)
    testing = form.get("testing", None)
    if not check_file or not api_key or not content_type:
        raise exception("Could not validate form-data")
    data = check_file.file.read()
    filename = f"data/{str(uuid4())}"
    if testing:
        filename = f"tests/temp_data/{str(uuid4())}"
    with open(filename, "wb") as file:
        file.write(data)
    user = get_user_by_api(api_key)
    save_content_to_db(user.id, content_type, filename)


async def get_user_by_api(api_key: str) -> User:
    user = await User.filter(api_key=api_key)
    if not user:
        raise exception("Auth Error! User with that api_key does not exist.")
    return user


async def save_content_to_db(user_id: int, content_type: str, filename: str):
    content = await Content.filter(filename=filename)
    if content:
        raise exception("Invalid filename, content with such filename already exist")
    content = Content.create(filename=filename, content_type=content_type, user=user_id)
