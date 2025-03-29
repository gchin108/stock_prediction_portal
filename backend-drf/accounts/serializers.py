from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, min_length=8, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def validate_email(self, value):
        # Check if the email already exists in the database
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

    # overriding create() in ModelSerializer
    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     return user
