from fastapi import APIRouter

from .auth import router as auth_router
from .sharex import router as sharex_router


router = APIRouter()
router.include_router(auth_router)
router.include_router(sharex_router)
