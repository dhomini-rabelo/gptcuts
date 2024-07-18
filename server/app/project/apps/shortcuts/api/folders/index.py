from rest_framework import generics, serializers
from apps.shortcuts.api.folders.serializers import (
    CreateFolderSerializer,
    EditFolderSerializer,
    ToggleFolderVisibilitySerializer,
)
from apps.shortcuts.models import Folder
from utils.errors import ErrorMessages


class CreateFolderAPI(generics.CreateAPIView):
    serializer_class = CreateFolderSerializer
    queryset = Folder.objects.all()

    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        return super().create(request, *args, **kwargs)


class EditFolderAPI(generics.UpdateAPIView):
    serializer_class = EditFolderSerializer
    queryset = Folder.objects.all()

    def put(self, request, *args, **kwargs):
        folder = self.get_object()
        if folder.user != request.user:
            raise serializers.ValidationError({'message': [ErrorMessages.FORBIDDEN]})
        return super().put(request, *args, **kwargs)


class ToggleFolderVisibilityAPI(generics.UpdateAPIView):
    serializer_class = ToggleFolderVisibilitySerializer
    queryset = Folder.objects.all()

    def put(self, request, *args, **kwargs):
        folder = self.get_object()
        if folder.user != request.user:
            raise serializers.ValidationError({'message': [ErrorMessages.FORBIDDEN]})
        request.data['is_private'] = not folder.is_private
        return super().put(request, *args, **kwargs)
