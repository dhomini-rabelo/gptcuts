from rest_framework import generics, serializers
from apps.shortcuts.api.shortcuts.serializers import CreateShortcutSerializer
from apps.shortcuts.models import Folder, Shortcut
from utils.errors import ErrorMessages


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
