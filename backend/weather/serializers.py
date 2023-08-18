from rest_framework import serializers
from .models import MetOfficeWeatherData

class MetOfficeWeatherDataSerializer(serializers.ModelSerializer):
    """Serializer for weather data."""

    class Meta:
        model = MetOfficeWeatherData
        fields = (
            "region_code",
            "parameter_name",
            "start_date",
            "end_date",
            "data",
        )


