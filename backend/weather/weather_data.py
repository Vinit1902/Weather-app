from django.db import models

class WeatherData(models.Model):
    region_code = models.CharField(max_length=255)
    parameter_name = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    #data = models.JSONField(null=True)
    data = models.JSONField()

def save_weather_data(weather_data, data):
    weather_item = WeatherData(
        region_code=weather_data['region_code'],
        parameter_name=weather_data['parameter_name'],
        start_date=weather_data['start_date'],
        end_date=weather_data['end_date'],
        data=data,
    )

    weather_item.save()

