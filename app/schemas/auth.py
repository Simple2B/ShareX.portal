from pydantic import BaseModel


class AuthPydantic(BaseModel):
    username: str
    api_key: str


class MessagePydantic(BaseModel):
    msg: str
