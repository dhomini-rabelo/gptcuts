from apps.shortcuts.models import Folder
from rest_framework import serializers


class CreateFolderSerializer(serializers.ModelSerializer):
    def to_representation(self, folder: Folder):
        return {
            'name': folder.name,
            'description': folder.description,
            'is_private': folder.is_private,
            'user': folder.user_id,
        }

    class Meta:
        model = Folder
        fields = (
            'name',
            'description',
            'user',
        )


class EditFolderSerializer(serializers.ModelSerializer):
    def to_representation(self, folder: Folder):
        return {
            'name': folder.name,
            'description': folder.description,
            'is_private': folder.is_private,
            'user': folder.user_id,
        }

    class Meta:
        model = Folder
        fields = (
            'name',
            'description',
        )


class ToggleFolderVisibilitySerializer(serializers.ModelSerializer):
    def to_representation(self, folder: Folder):
        return {
            'name': folder.name,
            'description': folder.description,
            'is_private': folder.is_private,
            'user': folder.user_id,
        }

    class Meta:
        model = Folder
        fields = (
            'is_private',
        )
