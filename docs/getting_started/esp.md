<!-- # Embever Serial Protocol


## Prerequisites
Before you begin make sure the following prerequisites are fulfilled.

- Make sure you have an Embever IoT Core account before you begin.
see [Creating Embever IoT Core Account](/tutorials/console/account_mgmt)
- System on Chip supported by {{platform}} with SIM card provided by Embever. Currently {{platform}} supports nRF9160 only. You will need a SIM card in the form of e-SIM or simply an external sim provided by Embever to connect to the Embever IoT Core Cloud services. The easiest way to get started is to get Cloud as a Module Development Kit from [here](https://www.embever.com/cloud-as-a-module) which comes up with the supported SoC, embeded sim card and extra pheripherials. Alternatively you can use Development kit like [nRF9160 DK](https://www.nordicsemi.com/Products/Development-hardware/nrf9160-dk).
- Visual Studio code installed in your development machine.

## Introduction
Embever Serial Protocol which we will commnoly refer to as ESP is a lightweight protocol to maintain communication between the CaaM OS and an external device. It can be used to connect any devices with the Embever Cloud. The communication of the embedded devices are based on the Inter-Integrated Circuit (I2C) bus with 2 additional signals for flow controlling. The protocol implements a simple request-response model.
Following the ESP specification, CaaM module acts as the I2C slave and the Application device is I2C master. I2C master can send requests to I2C slave which are called commands in the language of ESP specification. The I2C slave will respond with either an immediate response or the delayed response. 

To read more about the Embever Serial Protocol, please refer to the [Embever Serial Protocol Specification](./links/EmbeverSerialProtocol.pdf).

CaaM firmware comes up with Embever Serial Protocol Peripherial Application which is the implementation of Embever Serial Protocol on the I2C slave side.

!!! Note

    The Embever Serial Protocol Peripheral application is using the CaaM Application Framework to integrate with the CaaM connectivity core. It is using the same environment and APIs as any other custom application can access when using the CaaM Application Framework. Compiling the CaaM OS with the Embever Serial Protocol Peripherial Application is possible by anyone, however Embever distribute and maintains firmware images for the  Embever Serial Protocol Peripherial application.

On the I2C master side, i.e on the applicaiton device side you can use Embever Serial Client Application to communicate with the CaaM module. Embever Serial Client Appplication is an ESP command interpreter implementing the ESP I2C master. It is designed to be easily integrated into any existing embedded environment, providing a simple API to communicate with the Embever Cloud. This setup allows easy integration of any CaaM board into an existing embedded system. 
To read more about the Embever Serial Client Application, see the [Embever Serial Client](../links/esp-client.md). -->

# Embever Serial Protocol

## Prerequisites

Ensure the following prerequisites are met before proceeding with this guide:

- An activated account for the Embever IoT Core. For more information, see [Creating an Embever IoT Core Account](/tutorials/console/account_mgmt).
- A supported hardware device with a SIM card provided by Embever. For details, refer to [Supported hardware devices](./supported_hardware).

## Introduction

The Embever Serial Protocol (ESP) is a lightweight communication protocol designed to facilitate interaction between the CaaM embedded operating system (CaaM-OS) and external devices. It enables seamless connectivity to the Embever Cloud. Communication between devices is based on common serial buses like I2C, SPI, and UART with additional flow control mechanisms. ESP implements a simple request-response model, where external devices send requests to CaaM-OS, and CaaM-OS responds accordingly. For more details, refer to the [Embever Serial Protocol Specification](./links/EmbeverSerialProtocol.pdf).

## Verify the Firmware of the CaaM Hardware Device

The appropriate CaaM-OS firmware for the Embever Serial Protocol must be active on the CaaM hardware device. This application firmware is maintained and provided by Embever for [supported hardware devices](./supported_hardware). Standard CaaM hardware devices come preloaded with the ESP application firmware. However, it is possible to build the same application firmware for other hardware devices by compiling CaaM-OS with the ESP application. For more information, refer to the [Embever Serial Protocol Peripheral Application](../firmware/caam-app-framework/esp/esp_peripheral.md).
<!-- TODO: References to read more about the mentioned topics  -->
## The Embever IoT Library

The Embever IoT library is a software library developed and maintained by Embever to provide an easy and efficient way to integrate the ESP into existing applications. The library implements the initiator role of the ESP which is reposible for sending commands to the CaaM hardware device to perform various tasks. Since the Embever IoT library is written in C and includes a dedicated integration layer, it can be ported to many different platforms. The Embever IoT library is available at the following repository: [Embever IoT Library](https://github.com/Embever/embever-iot-library).

<!-- Continue from this point assumes a preset hardware setup. Links to tutorials for different environments could conclude this guide -->