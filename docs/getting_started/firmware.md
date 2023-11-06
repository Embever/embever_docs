# Firmware

The Embever Connectivity Firmware is the embedded software which powers the CaaM hardware. A turnkey embedded operating system for the Internet of Things based on Zephyr RTOS. The Embever Connectivity Firmware is built from 2 main components, the connectivity core and the application framework.
The connectivity core is mainly responsible for the network link management, the IoT messaging and GNSS functionality. The application
framework is handling the so called User Application Framework (UAF) and the integration with the connectivity core.

## Applications

The Embever Connectivity Firmware is capable of exchanging data communication with the Embever Cloud. This exchanged data can be an event triggered type or a continuous data stream either from the device to the cloud or from the cloud to the device. The way of utilizing the the Embever Connectivity Firmware IoT capability is to submit commands to the connectivity core trough the UAF.

### User Application Framework

The User Application Framework or UAF is the part of the Embever Connectivity Firmware which makes arbitrary code execution possible. The goal of the UAF is to let the users build their own custom applications within the Embever Connectivity Firmware. This provides the possibility to combine the Embever Connectivity Core with any custom application logic in a single application. To get started with the UAF, follow the [Getting Started with the Embever User Application Framework](../firmware/caam-app-framework/custom-app-framework/index.md) guide.

### Embever Serial Client Application

The [Embever Serial Protocol (ESP)](../firmware/caam-app-framework/esp/esp-overview.md) is a lightweight serial protocol designed for Internet of Things messaging. The Embever Serial Client (ESC) application is an ESP command interpreter implementing the ESP client role. The ESC is designed to be easily integrated into any existing IoT environment as well as into the Embever Connectivity Firmware UAF. Using the ESC user application allows to any embedded system or so called application microcontroller (APP MCU) to send commands to the Embever Connectivity Firmware. This setup allows easy integration of any CaaM hardware into an existing system. To read more about the Embever Serial Client user application, see the [Embever Serial Client](../firmware/caam-app-framework/esp/esp-overview.md) topic.

## Developer Tools

The Embever Connectivity Firmware is built using the Nordic nRF Connect SDK which is based on the Zephyr RTOS. It is available at [https://developer.nordicsemi.com/nRF_Connect_SDK](https://developer.nordicsemi.com/nRF_Connect_SDK). The Embever Connectivity Firmware binaries will be available in the release section of the Embever Serial Client application repository. For further information see the release notes of each version of the Embever Connectivity Firmware.


<button class="md-button-next-pg">My Button</button>