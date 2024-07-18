from rest_framework import generics
from utils.no_auth import NoAuthAPI
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from apps.accounts.serializers.auth.index import CreateUserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from apps.accounts.models import User
from rest_framework import status


class CreateUserAPI(NoAuthAPI, generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User.objects.all()


class LoginAPI(NoAuthAPI, TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(
            {"access_token": serializer.validated_data["access"]},
            status=status.HTTP_200_OK,
        )
