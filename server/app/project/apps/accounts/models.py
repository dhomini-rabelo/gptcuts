from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(blank=True, null=True, verbose_name='Email')

    def __str__(self):
        return self.username