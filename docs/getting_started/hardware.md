# Hardware
The Cloud As a Module hardware is an electronic device that is used to run the Embever Connectivity firmware. This electronic device is [the CaaM Mini](../hardware/dev-board/index.md) which is using an nRF9160 SoC from Nordic Semiconductor. It allows to use LTE networks like LTE Cat-NB1, LTE Cat-M1 and it is equipped with an integrated GNSS receiver. The CaaM Mini has a small form factor and minimalistic design which makes it perfect for prototyping.

## Prototyping
One of the main goals of our CaaM hardware boards is to make the prototyping and evaluation phase as smooth as possible. The CaaM Mini is designed to be used in the prototyping phase. It allows to set up a hardware prototype with any kind of hardware event without an external micro controller unit. Thanks to the wide range of operating voltage and low current consumption capabilities, the CaaM Mini can be used to evaluate battery powered applications as well. Thanks to the [Embever Serial Protocol](../firmware/caam-app-framework/esp/esp-overview.md), a lightweight serial protocol based on I2C , takes only 4 data lines to set up a communication with the CaaM Mini.

## Production
To put the CaaM hardware to the next level, it might be required to design a custom printed circuit board in order to make a perfect fit for the application. For this purpose the design files of the CaaM hardware are available to any user along with support and guidance from Embever.
Only 3 active component is required to fulfill the CaaM hardware design requirements, shrinking down the development time and being cost effective from the first design sketch to production.
For more information see the Customization and Integration section [here](../hardware/customization/index.md)