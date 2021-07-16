import asyncio
from typing import Generator
import os

import pytest
from fastapi.testclient import TestClient
from tortoise.contrib.test import finalizer, initializer

from app.setup import create_app
from app.models import User, Content


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEST_FILE = BASE_DIR + "/test_data/Code_dPWe4YTTWI.png"


@pytest.fixture()
def client() -> Generator:
    app = create_app()
    initializer(["app.models"], "sqlite://:memory:")
    with TestClient(app) as c:
        yield c
    finalizer()


@pytest.fixture()
def event_loop(client: TestClient) -> Generator:
    yield client.task.get_loop()


def test_uploading_file(client: TestClient, event_loop: asyncio.AbstractEventLoop):
    data = {"username": "michaelC", "password": "secret"}
    response = client.post("/auth/sign_up", json=data)
    data = {"api_key": response.json()["api_key"], "testing": True}
    file = {"sharex": open(TEST_FILE, "rb")}
    response = client.post("/sharex/", files=file, data=data)
    assert response
    assert response.ok
    user = event_loop.run_until_complete(User.filter(api_key=data["api_key"]).first())
    user_contents = event_loop.run_until_complete(user.contents)
    assert user_contents
    content = event_loop.run_until_complete(Content.filter(user=user).first())
    assert content
