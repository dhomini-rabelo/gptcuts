from rest_framework import generics
from apps.shortcuts.api.folders.serializers import CreateFolderSerializer
from apps.shortcuts.models import Folder


class CreateFolderAPI(generics.CreateAPIView):
    serializer_class = CreateFolderSerializer
    queryset = Folder.objects.all()

    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        return super().create(request, *args, **kwargs)
