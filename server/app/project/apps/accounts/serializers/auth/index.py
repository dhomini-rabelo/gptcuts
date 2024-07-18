from utils.errors import ErrorMessages
from .typings import (
    CreateUserRequestBodyType,
    CreateUserValidatedDataType,
)
from apps.accounts.models import User
from rest_framework import serializers


class CreateUserSerializer(serializers.ModelSerializer):
    def to_representation(self, user: User):
        return {
            "username": user.username,
        }

    def validate(self, validated_data: CreateUserValidatedDataType):
        initial_data: CreateUserRequestBodyType = self.initial_data
        if not initial_data.get('confirm_password'):
            raise serializers.ValidationError({'confirm_password': [ErrorMessages.REQUIRED]})
        elif initial_data['confirm_password'] != validated_data['password']:
            raise serializers.ValidationError({'confirm_password': [ErrorMessages.DIFFERENT_PASSWORDS]})
        return validated_data

    def create(self, validated_data: CreateUserValidatedDataType):
        new_user = User(username=validated_data['username'])
        new_user.set_password(validated_data['password'])
        new_user.save()
        return new_user

    class Meta:
        model = User
        fields = (
            'username',
            'password',
        )
