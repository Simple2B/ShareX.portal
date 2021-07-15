from fastapi import APIRouter, Request

from app.schemas import BaseResponsePydantic

router = APIRouter(prefix="/sharex")


@router.post("/", response_model=BaseResponsePydantic)
async def sharex(request: Request):
    form = await request.form()
    data = form["sharex"].file.read()
    filename = form["sharex"].filename
    with open(f"data/{filename}", "wb") as file:
        file.write(data)
    return {"msg": "test"}
