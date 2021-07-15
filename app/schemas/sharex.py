from pydantic import BaseModel


class ApiKeyPydantic(BaseModel):
    api_key: str
