from django.db import models


class Folder(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=128)
    is_private = models.BooleanField(default=True)
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Shortcut(models.Model):
    text = models.TextField()
    is_pinned = models.BooleanField(default=False)
    folder = models.ForeignKey(Folder, on_delete=models.CASCADE)

    def __str__(self):
        return self.text
