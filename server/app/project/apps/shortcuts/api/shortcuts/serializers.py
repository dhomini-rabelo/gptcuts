from apps.shortcuts.models import Shortcut
from rest_framework import serializers


class CreateShortcutSerializer(serializers.ModelSerializer):
    def to_representation(self, shortcut: Shortcut):
        return {
            'text': shortcut.text,
            'folder': shortcut.folder_id,
            'is_pinned': shortcut.is_pinned,
        }

    class Meta:
        model = Shortcut
        fields = (
            'text',
            'folder',
        )


class EditShortcutSerializer(serializers.ModelSerializer):
    def to_representation(self, shortcut: Shortcut):
        return {
            'text': shortcut.text,
            'folder': shortcut.folder_id,
            'is_pinned': shortcut.is_pinned,
        }

    class Meta:
        model = Shortcut
        fields = (
            'text',
        )


class ToggleShortcutPinSerializer(serializers.ModelSerializer):
    def to_representation(self, shortcut: Shortcut):
        return {
            'text': shortcut.text,
            'folder': shortcut.folder_id,
            'is_pinned': shortcut.is_pinned,
        }

    class Meta:
        model = Shortcut
        fields = (
            'is_pinned',
        )