from uuid import uuid4
import os

from fastapi import Request, HTTPException, status

from app.models import User, Content
from app.logger import log


BASE_DIR = os.path.dirname(os.path.abspath("README.md"))


def raise_error(msg: str):
    return HTTPException(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        detail=msg,
        headers={"WWW-Authenticate": "Bearer"},
    )


async def parse_sharex_request(request: Request):
    """Parse request data"""
    form = await request.form()
    check_file = form.get("sharex", None)
    api_key = form.get("api_key", None)
    testing = form.get("testing", None)
    if not check_file or not api_key:
        log(
            log.ERROR,
            "Invalid request data, File[%s], Api Key[%s]",
            check_file,
            api_key,
        )
        raise raise_error("Could not validate form-data")
    content_type = check_file.content_type
    data = check_file.file.read()
    filename = BASE_DIR + f"/data/{str(uuid4())}"
    # TODO: Store file on AWS S3
    if testing:
        filename = BASE_DIR + f"/tests/temp_data/{str(uuid4())}"
        content_type = "test"
    with open(filename, "wb") as file:
        file.write(data)
    user = await get_user_by_api(api_key)
    await save_content_to_db(user, content_type, filename)


async def get_user_by_api(api_key: str) -> User:
    """Get user by api_key"""
    user = await User.filter(api_key=api_key).first()
    if not user:
        log(
            log.ERROR,
            "Wrong credentials, user with api_key: [%s] does not exist",
            api_key,
        )
        raise raise_error("Auth Error! User with that api_key does not exist.")
    return user


async def save_content_to_db(user: User, content_type: str, filename: str):
    """Save new content to database"""
    content = await Content.filter(filename=filename)
    if content:
        log(
            log.ERROR,
            "Wrong credentials, content with filename: [%s] already exist",
            filename,
        )
        raise raise_error("Invalid filename, content with such filename already exist")
    content = await Content.create(
        filename=filename, content_type=content_type, user=user
    )
    return content
