from tortoise import fields
from tortoise.models import Model


class Content(Model):
    class Meta:
        table = "contents"

    id = fields.IntField(pk=True)
    filename = fields.CharField(max_length=64)
    content_type = fields.CharField(max_length=32)
    user = fields.ForeignKeyField("models.User", related_name="contents")
