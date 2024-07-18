from django.urls import path
from .api.shortcuts import index as shortcuts
from .api.folders import index as folders

app_name = 'shortcuts'

urlpatterns = [
    path('shortcuts', shortcuts.CreateShortcutAPI.as_view(), name='shortcuts'),
    path('shortcuts/<int:pk>', shortcuts.EditShortcutAPI.as_view(), name='shortcuts/edit'),
    path('shortcuts/pin/<int:pk>', shortcuts.ToggleShortcutPinAPI.as_view(), name='shortcuts/pin'),
    path('folders', folders.CreateFolderAPI.as_view(), name='folders'),
    path('folders/<int:pk>', folders.EditFolderAPI.as_view(), name='folders/edit'),
    path('folders/visibility/<int:pk>', folders.ToggleFolderVisibilityAPI.as_view(), name='folders/visibility'),
]
