import pytest
import asyncio
from typing import Generator
from fastapi.testclient import TestClient
from tortoise.contrib.test import finalizer, initializer

from app.setup import create_app
from app.models import User


TEST_FILE = "/home/alik/simple2b/ShareX.portal/tests/test_data/Code_dPWe4YTTWI.png"


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
    data = {"api_key": "test_api_key", "testing": True}
    file = {"sharex": open(TEST_FILE, "rb")}
    response = client.post("/sharex/", files=file, data=data)
    assert response
    assert response.ok
