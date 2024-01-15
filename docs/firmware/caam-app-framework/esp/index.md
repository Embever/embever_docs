# Embever Serial Protocol

Embever Serial Protocol (ESP) is a lightweight protocol to maintain communication between the CaaM OS and an external device. It can be used to connect any devices with the Embever Cloud.
The communication of the embedded devices are based on the Inter-Integrated Circuit (I2C) bus with 2 additional signals for flow controlling. The protocol is implementing a simple request-response model. To read more about the Embever Serial Protocol, please refer to the [Embever Serial Protocol Specification](./esp_specification.md).

## Implementations of the Embever Serial Protocol

There are two basic roles in the Embever Serial Protocol, the controller and peripheral. The controller is the device in the main role of the protocol,
it sends requests to the peripheral and receives responses from the peripheral. This two different roles are referred as ESPC and ESPP.
The implementation of the peripheral (ESPP) is part of the CaaM OS. It is executing the commands received from the controller (ESPC) and sends responses to the controller. To read more about the ESPP, please refer to the [Embever Serial Protocol Peripheral](./esp_peripheral.md).
The implementation of the controller (ESPC) is part of the Embever IoT Library, a software package provided by Embever which also aims to bring a simple and fast Embever Serial Protocol controller functionalities to any embedded device. To read more about the Embever IoT Library, please refer to the [Embever IoT Library](./embever-iot-library/index.md).

## Recommended use cases of the Embever Serial Protocol

Using the Embever Serial Protocol offers an easy and quick way to integrate IoT capabilities into an existing embedded device. Thanks to the Embever IoT Library, the integration of the Embever Serial Protocol Controller can be even faster so it is a good fit for evaluation and prototyping.
It is also a good match for large scale, complex embedded systems where the integration on the hardware level is complex or even not fusible. The ESP is using I2C which likely already part of the system, so there is only 2 additional signals needed to pass the integration of the additional hardware unit.