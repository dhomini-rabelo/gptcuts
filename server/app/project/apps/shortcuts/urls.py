from django.urls import path
from .api.shortcuts import index as shortcuts
from .api.folders import index as folders

app_name = 'shortcuts'

urlpatterns = [
    path('shortcuts', shortcuts.CreateShortcutAPI.as_view(), name='shortcuts'),
    path('folders', folders.CreateFolderAPI.as_view(), name='folders'),
]
