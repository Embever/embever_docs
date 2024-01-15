# Embever IoT Core for Embedded

The Embever IoT Core for Embedded software component equip the CaaM OS with versatile IoT capabilities.
It is handling the network link by controlling the network interfaces and the underlying hardware devices like the
cellular modem to provide a solid and reliable channel for the communication. Also it is responsible for
establishing secure communication with the Embever Cloud and providing a flexible way for IoT messaging for the rest of the system.

## Working with the Embever IoT Core for Embedded Software Library
The software library is referred as ebv_conn_lib in the development environment of the CaaM OS which deployed as a static library. To successfully link the library during the build process, the dependencies of the CaaM OS are required which is the nRF Connect SDK maintained by Nordic Semiconductor. Since the software development kit is based on the Zephyr RTOS, this process is mostly seamless and not require additional development tools. Due to that, the ebv_conn_lib can be used in any embedded environment which meet the requirements however the
recommended way to use it is the project template called ebv_uaf_template which is hosted [here](https://github.com/Embever/ebv_UAF_template).

## Quick Links
[Embever IoT Core for Embedded library on GitHub](https://github.com/Embever/ebv_conn_lib/tree/master)
