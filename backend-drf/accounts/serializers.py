from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, min_length=8, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    # overriding create() in ModelSerializer
    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     return user
