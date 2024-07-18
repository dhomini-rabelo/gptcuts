from rest_framework import generics
from utils.no_auth import NoAuthAPI
from apps.accounts.serializers.auth.index import CreateUserSerializer
from apps.accounts.models import User


class CreateUserAPI(NoAuthAPI, generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User.objects.all()