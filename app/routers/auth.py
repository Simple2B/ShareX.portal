from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm

from app.services import AuthService, get_current_user
from app.schemas import UserCreate, User, Token

router = APIRouter(prefix="/auth")


@router.post("/sign_up", response_model=User, tags=["Auth"])
async def sign_up(user_data: UserCreate):
    """Register new user"""
    service = AuthService()
    return await service.register_new_user(user_data)


@router.post("/sign_in", response_model=Token, tags=["Auth"])
async def sign_in(form_data: OAuth2PasswordRequestForm = Depends()):
    """Login"""
    service = AuthService()
    return await service.authenticate_user(form_data.username, form_data.password)


@router.get("/user", response_model=User, tags=["Auth"])
def get_user(user: User = Depends(get_current_user)):
    """Show current authenticated user"""
    return user
