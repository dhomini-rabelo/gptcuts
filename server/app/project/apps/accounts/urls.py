from django.urls import path
from .api import auth

app_name = 'accounts'

urlpatterns = [
    path('register', auth.CreateUserAPI.as_view(), name='register'),
]
