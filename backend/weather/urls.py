from django.urls import path

from .views import WeatherDataViewSet

urlpatterns = [
    path("weather/", WeatherDataViewSet.as_view({"get": "list", "post": "create"})),
    path("weather/<int:pk>/", WeatherDataViewSet.as_view({"get": "retrieve", "put": "update", "delete": "destroy"})),
]
