from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.serializers import ModelSerializer, EmailField, CharField
from .models import CustomUser
from .validators import CustomValidation
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token["fav_color"] = user.fav_color
        return token


class CustomUserSerializer(ModelSerializer):
    """
    Currently unused in preference of the below.
    """

    email = EmailField(required=True)
    username = CharField()
    password = CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ("email", "username", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def validate_username(self, value):
        if CustomUser.objects.filter(username=value).exists():
            raise CustomValidation(
                "Duplicate Username", "username", status_code=status.HTTP_409_CONFLICT
            )
        return value

    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise CustomValidation(
                "Duplicate Email", "email", status_code=status.HTTP_409_CONFLICT
            )
        return value

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(
            **validated_data
        )  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
