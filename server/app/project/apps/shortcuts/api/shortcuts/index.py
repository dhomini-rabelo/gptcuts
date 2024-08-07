from rest_framework import generics, serializers, views
from rest_framework.response import Response
from apps.shortcuts.api.shortcuts.serializers import (
    CreateShortcutSerializer,
    EditShortcutSerializer,
    ShortcutPresenter,
    ToggleShortcutPinSerializer,
)
from apps.shortcuts.api.folders.serializers import (
    FolderPresenter,
)
from apps.shortcuts.models import Folder, Shortcut
from utils.errors import ErrorMessages
from django.shortcuts import get_object_or_404
from utils.no_auth import NoAuthAPI



class ShortcutsListAPI(NoAuthAPI, views.APIView):

    def get(self, request, pk):
        folder = get_object_or_404(Folder.objects.select_related('user'), id=pk)
        return Response(data={
            'shortcuts': ShortcutPresenter(Shortcut.objects.filter(folder=folder), many=True).data,
            'folder': FolderPresenter(folder).data,
            'author': {
                'username': folder.user.username,
            },
        })

class CreateShortcutAPI(generics.CreateAPIView):
    serializer_class = CreateShortcutSerializer
    queryset = Shortcut.objects.all()

    def create(self, request, *args, **kwargs):
        folder = (
            Folder.objects.get(id=request.data.get('folder')) 
            if str(request.data.get('folder')).isnumeric() 
            else None
        )
        if folder and folder.user != request.user:
            raise serializers.ValidationError({'message': [ErrorMessages.FORBIDDEN]})
        return super().create(request, *args, **kwargs)


class EditShortcutAPI(generics.UpdateAPIView):
    serializer_class = EditShortcutSerializer
    queryset = Shortcut.objects.all()

    def put(self, request, *args, **kwargs):
        shortcut = self.get_object()
        if shortcut.folder.user != request.user:
            raise serializers.ValidationError({'message': [ErrorMessages.FORBIDDEN]})
        return super().put(request, *args, **kwargs)


class ToggleShortcutPinAPI(generics.UpdateAPIView):
    serializer_class = ToggleShortcutPinSerializer
    queryset = Shortcut.objects.all()

    def put(self, request, *args, **kwargs):
        shortcut = self.get_object()
        if shortcut.folder.user != request.user:
            raise serializers.ValidationError({'message': [ErrorMessages.FORBIDDEN]})
        elif not shortcut.is_pinned:
            pinned_schortcuts = Shortcut.objects.filter(folder__user=request.user, is_pinned=True).count()
            if pinned_schortcuts > 3:
                raise serializers.ValidationError({'message': [ErrorMessages.PINNED_SHORTCUTS_LIMIT]})
        request.data['is_pinned'] = not shortcut.is_pinned
        return super().put(request, *args, **kwargs)
