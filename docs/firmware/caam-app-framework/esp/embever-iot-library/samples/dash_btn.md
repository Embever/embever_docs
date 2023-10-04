# Dash Button

Application name : `dash_button`

## Overview

The Dash Button sample application is a simple application which is
sending data to the cloud. This example requires additional hardware
setup to work properly: a push button and an LED need to be connected to
the arduino board. The following table shows the necessary connections.

<div class="center-table" markdown>
  *Hardware Connections*

  Hardware               |Pin                     |Logic           |
  -----------------------| -----------------------|----------------|
  Button                 |D2                      |Active LOW      |
  LED                    |D3                      |Active HIGH     | 
  
</div>
  

For more information about the hardware connection, refer the
  [Wiring Digaram with Additional Component](wiring_led_btn.md).

The working principles of this application are the following: it sends
data to the cloud at every button presses. To achieve this task, it is
using an event. This is the way to send data from the device to the
cloud. To get more information about the Embever IoT Messaging, take a
look at the [Embever IoT Messaging](../api/ebv_iot_msg.md) topic.

## Flashing

Uploading this application to an Arduino compatible board is easy:
navigate to the examples and select the `dash_button` from the Embever
IoT library in Arduino IDE. Upload the sketch to the board and see the
result in the serial terminal.

## Testing the Application

To test the application, the necessary hardware connections should be
done (as mentioned before). After powering up the device, the following
information should appear in the serial terminal:

``` none
DashButton demo starting...
```

To send the event to the cloud press the external button. The external
LED will light up for 15 seconds.

To verify the event which is just sent, go to the cloud system and check
the events. Should look like the following:

``` JSON
{
    "type": "buttonPressed",
    "payload": {
        "name": "1"
    }
}
```

To continue experimenting with the sample application, press the
external button several times. A possible upgrade for this application
is to add and implement more external triggers (like buttons) and change
the `name` value according to the trigger source.
