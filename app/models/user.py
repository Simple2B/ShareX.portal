from uuid import uuid4

from tortoise import fields
from tortoise.models import Model


class User(Model):
    class Meta:
        table = "users"

    id = fields.IntField(pk=True)
    username = fields.CharField(max_length=64)
    email = fields.CharField(max_length=128, null=True)
    email_approved = fields.BooleanField(null=True)
    hash_password = fields.CharField(max_length=128)
    api_key = fields.CharField(max_length=128, default=str(uuid4()))
