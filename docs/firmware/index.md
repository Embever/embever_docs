
<!-- Embever IoT Core = IoT Core Cloud + IoT Core Firmware -->

# CaaM OS
The CaaM OS is a turnkey embedded operationg system for the Internet of Things. The purpose of CaaM OS is to enable users to build reliable and secure Embedded IoT Applications with minimum effort.

It consists of two main components: 

- Embedded IoT Core <!--IoT Core for Embedded systems, IoT Core Embedded Part-->
- Embedded Application Framework 

Layer diagram here

<!-- The main purpose of the IoT Core Firmware is to establish a secure connection and exchange data with the Embever Cloud. 

This exchanged data can be an event triggered type or a continuous data stream either from the device to the cloud or from the cloud to the device.
The Embever Connectivity Firmware is built from 2 main components, the connectivity core and the application framework. The connectivity core is mainly responsible for the network link management, the IoT messaging and GNSS functionality. The application framework is handling the so called User Application Framework (UAF) and the integration with the connectivity core. -->

## Embedded IoT Core 
It is responsible for all kind of networking tasks like network link management, IoT messaging, communication with the Embever Cloud and GNSS functionalities.
<!-- The connectivity core is a closed source software library which is require Zephyr RTOS to operate. -->
It provides an API to interact with the Embever Cloud. 
<!-- The User Application can also use this API directly or via the application framework which provide a simplified way to access the Embever Cloud features.  -->
The Embever Connectivity Core is distributed as a static library, so it can be used in any embedded application. However, the preferred way is to use the [UAF template](../firmware/caam-app-framework/custom-app-framework/uaf_template.md) as a starting point of any custom application.

## CaaM Application Framework

The application framework is part of the Embever Connectivity Firmware which allows to combine the Embever Connectivity Core with a custom application logic by providing and integration layer for the User Application Framework. Moreover, the application framework contain a utility package for accelerating the development process.
The application framework is using the connectivity core to access the Embever Cloud.


## Developer Tools

The Embever Connectivity Firmware is built using the Nordic nRF Connect SDK which is based on the Zephyr RTOS. It is available at [https://developer.nordicsemi.com/nRF_Connect_SDK](https://developer.nordicsemi.com/nRF_Connect_SDK). The Embever Connectivity Firmware binaries will be available in the release section of the Embever Serial Client application repository. For further information see the release notes of each version of the Embever Connectivity Firmware.

# Quick Links
[Getting Start with the CaaM User application framework](../firmware/caam-app-framework/custom-app-framework/uaf_getting_started.md)

[Embever Serial Client Application](../firmware/caam-app-framework/esp/esp-overview.md)

[User Application Framework Sample Applications](../firmware/caam-app-framework/custom-app-framework/samples/index.md)
