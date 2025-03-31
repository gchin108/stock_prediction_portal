from django.urls import path
from accounts import views as UserViews
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # registration end point, using custom view which will require a serializer as we need to validate user input and create new user for the registration.
    path('register/', UserViews.RegisterView.as_view()),

    # access and refresh token end point, using imported views from simplejwt
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # protected route which will require access token obtained from user login
    path('protected-view/', UserViews.ProtectedView.as_view())
]
