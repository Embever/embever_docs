
<!-- Embever IoT Core = IoT Core Cloud + IoT Core Firmware -->

# CaaM OS
The CaaM OS is a turnkey embedded operating system for the Internet of Things. The purpose of CaaM OS is to enable users to build reliable and secure Embedded IoT Applications with minimum effort.

It consists of two main components: 

- Embever IoT Core for Embedded<!--IoT Core for Embedded systems, IoT Core Embedded Part-->
- Embedded Application Framework

![Software Stack of CaaM OS](./resorces/Caam_OS_HL_L.png#only-light "Caam OS high level software stack")
![Software Stack of CaaM OS](./resorces/Caam_OS_HL_D.png#only-dark "Caam OS high level software stack")

## Embever IoT Core for Embedded
The Embever IoT Core is software component which is part of the CaaM OS.
It is responsible for two main task. Firstly to manage a stable network link, and secondly to establish secure communication with the Embever Cloud. To allow user to connect to the Embever Cloud, it is implementing a rich set of APIs. This part of the CaaM OS is closed source, distributed as a standalone library and it is require Zephyr RTOS to operate.

## CaaM Application Framework
The application framework is part of the CaaM OS which allows to combine the capabilities of the Embever IoT Core with a custom application logic by providing and integration layer for the User Application Framework (UAF). This functionality allows to build and deploy custom applications with the CaaM OS.


## Developer Tools
The CaaM OS is built using the Nordic nRF Connect SDK which is based on the Zephyr RTOS. It is available at [https://developer.nordicsemi.com/nRF_Connect_SDK](https://developer.nordicsemi.com/nRF_Connect_SDK). Start building applications with the CaaM OS does not require any additional development tools since it has no other external dependencies.

# Quick Links
[Getting Start with the CaaM User application framework](../firmware/caam-app-framework/custom-app-framework/uaf_getting_started.md)

[Embever Serial Client Application](../firmware/caam-app-framework/esp/esp-overview.md)

[User Application Framework Sample Applications](../firmware/caam-app-framework/custom-app-framework/samples/index.md)
