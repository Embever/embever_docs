# Hello Cloud

Application name : `hello_cloud`

## Overview

The Hello Cloud sample application is a simple application which is
sending data to the cloud. This example does not require any additional
hardware, just an arduino compatible board and a compatible Embever CaaM
device supported by the Embever IoT library. To wire up the hardware
devices, follow the instruction in the [Wiring Diagram With No Additional Component](wiring_simple.md) topic.

The working principles of this application is quite simple: it sends
data to the cloud only one time. To achieve this task, it is using an
event. This is the way to send data from the device to the cloud. To get
more information about the Embever IoT Messaging, take a look at the
[Embever IoT Messaging](../api/ebv_iot_msg.md).

## Flashing

Uploading this application to an Arduino compatible board is easy:
navigate to the examples and select the `hello_cloud` from the Embever
IoT library in Arduino IDE. Upload the sketch to the board and see the
result in the serial terminal.

## Testing the Application

To test the application, the necessary hardware connections should be
set up (as mentioned before). After powering up the device, the
following information should appear in the serial terminal.

``` none
Hello Cloud starting...
Sending hello_cloud event...
Event sent to the cloud
```

Now the event should be sent to the cloud. Verify it in the Embever
Cloud System. The submitted event should be the following content:

``` JSON
{
    "type": "Hello_Cloud",
    "payload": {
        "source": "ebv_demo"
    }
}
```
