# IoT Blinky

Application name : `iot_blinky`

## Overview

The IoT Blinky sample application is a simple application which is
receiving and sending data from/to the cloud. This example requires
additional hardware setup to work properly: a push button and an LED
need to be connected to the arduino board. The following table shows the
necessary connections.
<div class="center-table" markdown>
  *Hardware Connections*

  Hardware               |Pin                     |Logic
  -----------------------|-----------------------|----------------
  Button                 |D2                     | Active LOW
  LED                    |D3                     |Active HIGH
  
</div>

For more information about the hardware connection, refer the
  [Wiring Digaram with Additional Component](wiring_led_btn.md).

The working principles of this application are the following: It is
fetching data from the cloud from time to time and then reading the
response if any. To do this, it is using an action. This is the way to
get data from the cloud to the device. To get more information about the
Embever IoT Messaging, take a look at the
[Embever IoT Messaging](../api/ebv_iot_msg.md) topic.

After the action is received, the application checks its type and parses
the message payload accordingly. Based on that information the external
LED will light up or be switched off. Moreover a response for each
action will be submitted. In this way, the cloud system can verify the
result of an action.

## Flashing

Uploading this application to an Arduino compatible board is easy:
navigate to the examples and select the `iot_blinky` from the Embever
IoT library in Arduino IDE. Upload the sketch to the board, and see the
result in the serial terminal.

## Testing the Application

To test the application, the necessary hardware connections should be
done (as mentioned before). After powering up the device, the following
information should appear in the serial terminal:

``` none
IoT Blinky starting...
```

Pushing the external button will start the fetching process. The
following message should appear in the serial terminal:

``` none
Fetching...
```

This means that the application started to look for actions. You should
now create the following action in the cloud:

``` JSON
{
    "device": {
        "id": "<<ID>>"
    },
    "type": "setLED",
    "payload": {
        "state": "on"
    }
}
```

!!! Note 

    Replace the <<ID\>\> placeholder to the the device ID

With the `"state":"on"` payload, the state of the external LED can be
set. With the action creation, the device should change the state of the
external LED according to the action. To verify the response from the
device, navigate to the corresponding action in the cloud system and see
the result. The device should submit the following result and result
payload:

``` JSON
"result": {
        "LED": "on"
    },
"result_code": "Success",
```

!!! Note
    
    The result payload is set by the state of the external LED.

To continue experimenting with the sample application, submit more
actions in the cloud system and see the result on the device.

An optional upgrade for this application is to add more LED\'s and
implement a logic to support them. A possible solution is extending the
action payload by adding a `led_id` key. According to this value, change
the corresponding LED state. The new action can be the following:

``` JSON
{
    "device": {
        "id": "<<ID>>"
    },
    "type": "setLED",
    "payload": {
        "led_id": 1
        "state": "on"
    }
}
```

The new response:

``` JSON
"result": {
        "LED": "on"
        "id":   1
    },
"result_code": "Success",
```
