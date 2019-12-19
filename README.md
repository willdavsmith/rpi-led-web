# rpi-led-web

Creates a NodeJS/Express webserver to control LEDs from RaspberryPi board.
Designed to work with LEDs controlled by PIGPIO (http://abyz.me.uk/rpi/pigpio/)

To run, configure the .env.sample file to include your Raspberry Pi's IP and your chosen port number. Then, move the .env.sample data to a file called .env (e.g. mv .env.sample .env)

## npm commands:
npm run-script build -> packages frontend js code
npm run-script start -> starts server
