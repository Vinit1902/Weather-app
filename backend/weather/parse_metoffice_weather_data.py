import unittest
import requests
import json

class ParseMetOfficeWeatherDataTests(unittest.TestCase):
    """Tests for the parse_metoffice_weather_data() function."""

    def test_valid_api_key(self):
        """Tests that the data parsing function works correctly with a valid API key."""
        region_code = "UK000000"
        parameter_name = "tmax"
        start_date = "2023-01-01"
        end_date = "2023-12-31"

        weather_data = parse_metoffice_weather_data(region_code, parameter_name, start_date, end_date)
        self.assertIsNotNone(weather_data)
        self.assertGreater(len(weather_data), 0)

    def test_invalid_api_key(self):
        """Tests that the data parsing function raises an error if an invalid API key is used."""
        region_code = "UK000000"
        parameter_name = "tmax"
        start_date = "2023-01-01"
        end_date = "2023-12-31"

        with self.assertRaises(ValueError):
            parse_metoffice_weather_data("invalid_api_key", parameter_name, start_date, end_date)

    def test_different_regions(self):
        """Tests that the data parsing function works correctly for different regions."""
        region_code_1 = "UK000000"
        region_code_2 = "IE000001"
        parameter_name = "tmax"
        start_date = "2023-01-01"
        end_date = "2023-12-31"

        weather_data_1 = parse_metoffice_weather_data(region_code_1, parameter_name, start_date, end_date)
        weather_data_2 = parse_metoffice_weather_data(region_code_2, parameter_name, start_date, end_date)
        self.assertNotEqual(weather_data_1, weather_data_2)

    def test_different_parameters(self):
        """Tests that the data parsing function works correctly for different parameters."""
        region_code = "UK000000"
        parameter_name_1 = "tmax"
        parameter_name_2 = "tmin"
        start_date = "2023-01-01"
        end_date = "2023-12-31"

        weather_data_1 = parse_metoffice_weather_data(region_code, parameter_name_1, start_date, end_date)
        weather_data_2 = parse_metoffice_weather_data(region_code, parameter_name_2, start_date, end_date)
        self.assertNotEqual(weather_data_1, weather_data_2)

    def test_different_date_ranges(self):
        """Tests that the data parsing function works correctly for different date ranges."""
        region_code = "UK000000"
        parameter_name = "tmax"
        start_date_1 = "2023-01-01"
        end_date_1 = "2023-03-01"
        start_date_2 = "2023-06-01"
        end_date_2 = "2023-09-01"

        weather_data_1 = parse_metoffice_weather_data(region_code, parameter_name, start_date_1, end_date_1)
        weather_data_2 = parse_metoffice_weather_data(region_code, parameter_name, start_date_2, end_date_2)
        self.assertNotEqual(weather_data_1, weather_data_2)
