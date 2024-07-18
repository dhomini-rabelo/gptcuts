from rest_framework import generics, serializers, views
from rest_framework.response import Response
from apps.shortcuts.api.folders.serializers import (
    CreateFolderSerializer,
    EditFolderSerializer,
    ToggleFolderVisibilitySerializer,
    FolderPresenter,
)
from apps.shortcuts.api.shortcuts.serializers import ShortcutPresenter
from apps.shortcuts.models import Folder, Shortcut
from utils.errors import ErrorMessages


class MyFoldersListAPI(views.APIView):

    def get(self, request):
        pinned_shortcuts = Shortcut.objects.filter(is_pinned=True, folder__user=request.user)
        folders_data = FolderPresenter(
            Folder.objects.filter(
                user=request.user,
            ),
            many=True,
        ).data
        folders_with_shortcuts = list(map(
            lambda folder: {
                **folder,
                'shortcuts': ShortcutPresenter(
                    list(
                        filter(lambda shortcut: str(shortcut.folder_id) == str(folder['id']), pinned_shortcuts)
                    ),
                    many=True,
                ).data,
            },
            folders_data,
        ))
        return Response(data=folders_with_shortcuts)     


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
