from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import MetOfficeWeatherData
from .serializers import MetOfficeWeatherDataSerializer


class WeatherDataViewSet(ModelViewSet):
    """ViewSet for weather data."""

    model = MetOfficeWeatherData
    serializer_class = MetOfficeWeatherDataSerializer

    def get_queryset(self):
        """Retrieves all weather data records."""
        if self.request.user.is_authenticated:
            return MetOfficeWeatherData.objects.filter(user=self.request.user)
        else:
            return MetOfficeWeatherData.objects.none()

