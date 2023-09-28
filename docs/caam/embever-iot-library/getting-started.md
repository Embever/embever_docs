# Getting Started

This document serves as a guide through the basic steps that are
necessary to start building IoT applications with the Embever Cloud as a
Module Development Kit and gives a brief overview of our stack. The goal
is to provide just enough information to be able to get familiar with
the IoT world without being too overwhelming. To be able to complete
this guide, an Arduino compatible hardware will be necessary.


## Embever IoT software library

To make it even simpler, Embever provides an additional software library
that handles the ESP on its own. There is no need to fully understand
our protocol and implement a custom software library to be able to use
the Embever CaaM development board. With this simplicity, starting to
work on an IoT application was never that easy, without the heavy
proprietary communication protocol handling. The Embever IoT software
library is platform-independent and does not contain any peripheral
drivers. In this way, it can be easily integrated into any existing
environment. To create sample applications, we chose the Arduino
framework to make communication possible between an external device and
the Embever CaaM development kit. In our mind, the Arduino Framework is
a great tool to show how things work and the idea is easily adaptable to
other platforms as well.

## Summary

To summarize the above topics before starting to work with the examples:

-   Configure the hardware by shorting the right solder jumpers
    based on the required behavior
-   Connect the CaaM board with an external device
-   Supply power to the system, the easiest way is to use a lithium
    polymer battery with a JST connector

## Introducing the Embever Cloud System

Embever IoT Core is responsible to handle all messaging to and from a
device. The Embever IoT Core provides an API to easily send and receive
data from a device. Besides this, it can also be used to manage
resources like devices and firmwares.

### Activating the Embever Account

When an order is submitted for the Embever Cloud As A Module development
kit, an account is automatically created with the given details and an
email is sent to activate the newly created account. To set up the
account simply follow the link in the received email. With the personal
credentials, logging in to the [Embever Cloud
console](https://console.embever.com) or to the [Embever Cloud Browsable
API](https://api.embever.com) is now possible.

To manage the resources use the Embever Cloud Browsable API. Go to the
<https://api.embever.com/v2/devices/> where all the personal devices
should be listed.

### Getting Started with the API

### Getting an access token

The API uses JWT tokens to authorize requests to resources. To obtain an
access toke an application token is necessary. To create an application
token, use the [tokens endpoint](https://api.embever.com/v2/tokens/) in
the Embever Cloud Browsable API and make a POST request with an alias.

``` JSON
{
    "alias": "AppTokenHelloWorld"
}
```

The response should be similar:

``` JSON
{
    "id": 45,
    "url": "https://api.embever.com/v2/tokens/45/",
    "alias": "AppTokenHelloWorld",
    "expiry_date": null,
    "token": "eyJ0eXAiOiJKdsdfOiJUBGsMiJ9.eyJhbGlhcyI6IkldfhelsseInVzZXJfaWQiOjE4fQ.MT1Zp2emXHjew8nqYF3CrbjIfk6eqH6zrandtokenBhlpJ9jPlpKChs6lbeybnL1AMgq3R68g",
    "scope": {
        "organisation": "b4ask977-05c5-470f-a936-d3340bff",
        "application": null,
        "user": 36
    },
    "created_at": "2022-01-28T08:26:12.892335Z"
}
```

!!! Note 

    The token is displayed only once. Keep it secure as this is used to get
    the access and refresh tokens to access personal resources in the
    Embever IoT Core.


Obtaining an access token is now possible by posting an application
token to the `/authenticate` endpoint.

``` console
curl --location --request POST 'https://api.embever.com/v2/authenticate/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "application_token" : "eyJ0eXAiOiJKdsdfOiJUBGsMiJ9.eyJhbGlhcyI6IkldfhelsseInVzZXJfaWQiOjE4fQ.MT1Zp2emXHjew8nqYF3CrbjIfk6eqH6zrandtokenBhlpJ9jPlpKChs6lbeybnL1AMgq3R68g"
}'

{
    "refresh": "eyJ0eXAiOiJKdsdfOiJUBGsMiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVz2QwZDQ1N2M2NDBhYWIzNzk2NmI2ZmYwMjBmMTQiLCJ1c2VyX2lkIjoxOH0.lC-3jlgeOBYuk5Ul3zTqRFpVA1SEouJ3sHKkSH5Q",
    "access": "eyJ0eXAiOiJKdsdfOiJUBGsMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMA0ZTgyODA5YmI1MzEwZmQ3MzczNSIsInVzZXJfaWQi.dDjwoOpOpxvysqw1-Iotthq9Zrpx1BQQxBzk2Z7h"
}
```

Access token can now be passed to the Authorization header to access the
resources in the API.

To confirm the above steps, let\'s try to get a devices by using the
`curl` utility.

``` console
curl --location --request GET 'https://api.embever.com/v2/devices/' \
--header 'Authorization: Bearer eyJ0eXAiOiJKdsdfOiJUBGsMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMA0ZTgyODA5YmI1MzEwZmQ3MzczNSIsInVzZXJfaWQi.dDjwoOpOpxvysqw1-Iotthq9Zrpx1BQQxBzk2Z7h'

[
    {
    "url": "https://api.embever.com/v2/devices/EzJei1BX/",
    "id": "EzJei1BX",
    "name": "HelloWorldDevice",
    "activated": true,
    "application": null,
    "type": "other",
    "webhooks": null,
    "meta": null,
    "sim": "123456789019876",
    "created_at": "2022-01-25T15:58:37.293802Z"
    }
]
```

Accessing other resources in the API using the access token is also
possible.

### Creating an action

The following example shows how to create actions in the API.

``` console
curl --location --request POST 'https://api.embever.com/v2/actions/' \
--header 'Authorization: Bearer eyJ0eXAiOiJKdsdfOiJUBGsMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMA0ZTgyODA5YmI1MzEwZmQ3MzczNSIsInVzZXJfaWQi.dDjwoOpOpxvysqw1-Iotthq9Zrpx1BQQxBzk2Z7h'
--header 'Content-Type: application/json' \
--data-raw '{
    "device": {
        "id": "EzJei1BX"
    },
    "type": "setLED",
    "payload": {
        "LED": "on"
    }
}'

{
    "url": "https://api.embever.com/v2/actions/1003691/",
    "id": 1003691,
    "device": {
        "id": "EzJei1BX",
        "name": "HelloWorldDevice"
    },
    "type": "setLED",
    "payload": {
        "LED": "on"
    },
    "status": {},
    "webhooks": null,
    "service_level": 0,
    "cancelled": false,
    "finished": false,
    "result": null,
    "created_at": "2022-01-28T09:32:25.379189Z",
    "result_code": null,
    "expiry_date": null,
    "expired": false
}
```

### Getting events from the Device

The following example shows how to get events from the API.

``` console
curl --location --request GET 'https://api.embever.com/v2/devices/EzJb1BX/events/' \
--header 'Authorization: Bearer eyJ0eXAiOiJKdsdfOiJUBGsMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMA0ZTgyODA5YmI1MzEwZmQ3MzczNSIsInVzZXJfaWQi.dDjwoOpOpxvysqw1-Iotthq9Zrpx1BQQxBzk2Z7h'

[
    {
        "url": "https://api.embever.com/v2/events/70664807/",
        "id": 70664807,
        "device": "EzJei1BX",
        "sim": "123456789019876",
        "type": "wakeUp",
        "payload": {
            "lat": 525841746,
            "lon": 122812903
        },
        "created_at": "2022-01-13T16:09:21.991434Z"
    },
    ...
]
```

For more details please visit the [Embever core API
documentations](https://api-docs.embever.com/).

### Connecting the device to the Embever Cloud System

## Setting up the Arduino environment

The Arduino IDE is a well known integrated development environment to
support all kinds of Arduino compatible devices. The Arduino IDE needs
to be installed in order to compile the Embever IoT library. Moreover
there are 2 necessary modifications that need to be done on the Arduino
Wire library before it would be usable to work with the Embever IoT
library. The Embever IoT library needs to send longer messages that the
default Arduino Wire library can handle. The easiest way to locate them
is to get information about the Arduino Core library location. The
Arduino IDE carries this information under the Preference sub menu.

![](./img/Arduino_IDE_code_HL.png)

The following path shows the location of the arduino core. Using this
example, in this case the files can found in the following location:
`/Users/macbook/Library/Arduino15/packages/arduino/hardware/avr/1.8.3/libraries/Wire/src/Wire.h`
`/Users/macbook/Library/Arduino15/packages/arduino/hardware/avr/1.8.3/libraries/Wire/src/utility/twi.h`

| Note: This location will vary on other systems!

Change the following lines according to the following:

<div class="center-table" markdown>
 *Wiring library modifications*

  File              |Location         |Change from                      |Change to
  ----------------- |-----------------|-------------------------------- |---------------------------------
  `Wire.h`          |line 29           |`#define BUFFER_LENGTH 32`       |`#define BUFFER_LENGTH 128`|
  `Twi.h`           |line 34           |`#define TWI_BUFFER_LENGTH 32`   |`#define TWI_BUFFER_LENGTH 128`|

</div>

With this modification, the Embever IoT library will be able to send the
right messages over I2C.

## Setting up the Embever IoT library in Arduino IDE

To be able to use the Embever IoT library, it need to be installed to
the Arduino IDE first. The Embever IoT library is depends on the CWPack
library.

Download the libraries from the following links by the download source code button and select the .zip option:

-   [Embever IoT
    Library](https://gitlab.com/embever-public/embever-iot-library)
-   [CWPack Library](https://gitlab.com/embever-public/cwpack)

Add the downloaded files to the Arduino IDE:

-   1 Open Arduino ID
-   2 Select: `Sketch / Include Library / Add .ZIP Library…`
-   3 Add both downloaded files in this way

To open an example from the Embever IoT library from the Arduino IDE
select `File / Examples / Embever IoT Library / Hello_Cloud`. Compile
the Sketch and Upload to the device and open the Serial Terminal from
the Arduino IDE to see the logs.

To see the result in the Embever Cloud System go to the Browsable API.

## Modifying the Hello_Cloud example

Extending the Hello_Cloud example is a great way to get familiar with
the Embever IoT library and with the Embever Cloud System. Let's extend
the existing payload by adding another key value pair to it. Add the
following line just under line 31:
`ebv_iot_addGenericPayload(\"description\", \"first_demo\");`

![](./img/Hello_Cloud_mod.png)

Verify the result in the cloud system after the sketch was uploaded to
the device. Working with the Embever IoT solution is fun because it has
a lot of potential to build and deploy the IoT applications of the
future. To see more examples, dig deeper in the library and read about
the whole API, check the Embever IoT library documentation here.
