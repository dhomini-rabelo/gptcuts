from django.urls import path
from .api.auth import index

app_name = 'accounts'

urlpatterns = [
    path('register', index.CreateUserAPI.as_view(), name='register'),
    path('login', index.LoginAPI.as_view(), name='login'),
]
