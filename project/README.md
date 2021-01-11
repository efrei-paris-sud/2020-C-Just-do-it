
# LUMINUS:


**Description:**  

*Problem Definition :

When you turn on the light at home, it is pleasant to choose the color according to the atmosphere in which a user is. We have all lost a remote in our life, so using a site on your phone to choose the color of your light is the solution. The led strip does not lightly light up in a solid color, we can put gradients on it. Finally, when a user organizes an event at home, he can decide that his light atmosphere (the leds) react to the music he is listening to.

*Challenges & Motivation

After carrying out the lab on RGB leds which was very interesting, we decided to continue working on arduino light. Indeed, the aesthetic and practical aspect of the LEDs that we can use on a daily basis pleased us both.
We wanted to do something useful, that we liked and that would allow us to learn how to use an esp32, and sound sensors.


# Working Video


https://www.youtube.com/watch?v=a7ppmsQK1MU

# Components
- 1 x RGB Led
- 1 x Wires
- 1 x Ecran Oled ssd1306
- 1 x Sound sensor
- 1 x Breadboard
- 1 x ESP32

# Schematic

<img src="https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/project/arduino-schematics.png" width="300" height="300" />

<img src="https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/project/136435459_711184832869076_6337781419149304938_n.jpg" width="250" height="250" />


# Code overView

1/ Arduino

ESP32 is connected to 3 different components: a sound sensor, an OLED display and a 60 neopixel lightStrip.
The main goal of the Arduino's code is to fetch the database to retrieve the data representing the state of the device (identified by the Arduino's mac address in the database).

After fetching the data the Arduino will execute different methods based on the device "mode" (simple color, sound, gradient, or animated gradient), it will set the right color on the light strip, analyze the sound if the sound mode is on, and display the current mode information on the OLED screen.

2/ Front

The web application is developed with VueJS and TailwindCSS. Its goal is to give the user an interface to control the led with.
By selecting mode or color, the app will use the database REST API to write in the database in the right device noSQL document.


3/ Database

The database used is the Firebase RealTime database. It allows the device to connect to it and to "listen" the different changes made to it (in our case by the front application), unfortunately, the Arduino code language is not compatible with these changes watch and we had to use the REST API to make calls every X sec.
This could be improved by using a device with Python or JS code in it, it would improve the reactivity of the device a lot.



