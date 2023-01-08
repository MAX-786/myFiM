import cv2
import numpy as np
import os
import modules.speech as speech
import time
import datetime
from json import loads
from requests import get
from pyowm.owm import OWM
from modules.keys import keys
import webbrowser


engine = speech.Speech()


def get_brightness(cam):
    ret, frame = cam.read()
    if ret == None:
        engine.text_to_speech("Not getting any frame. Quitting now...")
    else:
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        avg = np.sum(frame) / (frame.shape[0] * frame.shape[1])
        avg = avg / 255
        brightness = None
        if(avg > 0.6):
            brightness = "Very bright"
        elif(0.4 < avg <= 0.6):
            brightness = "Bright"
        elif(0.2 < avg <= 0.4):
            brightness = "Dim"
        else:
            brightness = "Dark"

        engine.text_to_speech("It is {} outside".format((brightness)))

    return


def play_file(fname):
    # for Windows Users
    os.system("start " + fname)
    # for Linux Users
    #os.system("mpg123 " + fname)
    time.sleep(4)
    return


def get_time():
    currentDT = datetime.datetime.now()

    engine.text_to_speech("The time is {} hours and {} minutes".format(
        currentDT.hour, currentDT.minute))

    return


def weatherForecaste():
    WEATHER_API_KEY = keys['weather_api_key']

    response = get("http://ipinfo.io/json")
    responseDecode = loads(response.text)
    latlon = responseDecode["loc"].split(",")
    owm = OWM(WEATHER_API_KEY)
    mgr = owm.weather_manager()
    geo = owm.geocoding_manager()

    weather = mgr.weather_at_coords(
        lat=float(latlon[0]), lon=float(latlon[1])).weather
    weather_status = weather.detailed_status
    weather_temp = weather.temperature('celsius')
    weather_rain = weather.rain
    visibility = weather.visibility()

    one_call = mgr.one_call(
        lat=float(latlon[0]), lon=float(latlon[1]))

    location_list = geo.reverse_geocode(
        lat=float(latlon[0]), lon=float(latlon[1]), limit=1)

    location = 'your location'

    if len(location_list) == 1:
        location = location_list[0].name

    national_weather_alerts = one_call.national_weather_alerts

    result = f" The current weather status of {location} is {weather_status}. The current temperature of the surrounding is {weather_temp['temp']} degree Celsius and it feels like {weather_temp['feels_like']} degree Celsius."

    if weather_rain:
        result += f" About {weather_rain['1h']} milli meters of rain has fallen in last 1 hour."

    if float(visibility) < 0.1:
        result += " The visibility is very low. It is suggested to stay at home in this situtation."
    else:
        result += " The visibilty is good around you. You can walk safely on the roads."

    # if national_weather_alerts:
    #     result += ' There are some national weather alerts as well. Listen to them carefully:'
    #
    #     for alert in national_weather_alerts[:1]:
    #         result += f"\n{alert.description} - Alert sent by {alert.sender}"

    engine.text_to_speech(result)
def go_to_page(url):
  webbrowser.open(url)

def show_Insurance():
  engine.text_to_speech("1. Visit the Insurance page")
  go_to_page("https://my-fim.vercel.app/admin/dashboard/Insurance")
def transaction_limit():
    engine.text_to_speech("1. Visit the Transaction Limit page")
    go_to_page("https://my-fim.vercel.app/admin/dashboard/payemnt/Transaction-Limit")
def go_to_services():
    engine.text_to_speech("1. Visit the Account Statement page")
    go_to_page("https://my-fim.vercel.app/admin/dashboard/services")
def go_user_profile():
    engine.text_to_speech("1. Visit the user profile page")
    go_to_page("https://my-fim.vercel.app/admin/user-profile")
def go_to_fund_transfer():
    engine.text_to_speech("1. Visit the Fund Transfer page")
    go_to_page("https://my-fim.vercel.app/admin/dashboard/payment/Fund-Transfer")


