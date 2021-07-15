from fastapi import APIRouter, Request, status

from app.schemas import BaseResponsePydantic
from app.services import parse_sharex_request

router = APIRouter(prefix="/sharex")


@router.post(
    "/",
    response_model=BaseResponsePydantic,
    status_code=status.HTTP_201_CREATED,
    tags=["ShareX"],
    summary="Upload content to server",
)
async def sharex(request: Request):
    """Upload content to server"""
    await parse_sharex_request(request)
    return {"msg": "Content has been uploaded"}
