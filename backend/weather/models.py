from django.db import models


class MetOfficeWeatherData(models.Model):
    """Model for weather data."""

    region_code = models.CharField(max_length=255)
    parameter_name = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    data = models.JSONField()

