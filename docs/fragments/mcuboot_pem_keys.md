To embed secure firmware update into the deployment process, the firmware binary has to be signed with a unique key. Ignoring this option and using the default keys of the SDK is not forbidden for internal development, but as soon as the firmware pass the development stage, it is recommended to use a custom keys to maintain security.
!!! note 
    To use the default keys to sign the firmware binaries, remove ( or make the line begin with the `#` sign to disable it) the following line in the `mcuboot.conf` file.

```c
CONFIG_BOOT_SIGNATURE_KEY_FILE="fota-keys/nRF9160/dev/mcuboot-ec-p256.pem"
```

To generate a custom signing keys, follow [this](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/app_dev/bootloaders_and_dfu/fw_update.html#signature-keys) guide written by the Nordic Semiconductor team.
The newly generated keys can be places to any location and they can be referenced with they absolute path. Using a relative path is also possible ( like the default value of the `CONFIG_BOOT_SIGNATURE_KEY_FILE` ). In this case the base directory of this relative path is the following location:

`<nrf_sdk_base>/<version_number>/bootloader/mcuboot`

*As an example, the absolute location of the signing key is : `/opt/nordic/ncs/v2.2.0/bootloader/mcuboot/fota-keys/nRF9160/dev/mcuboot-ec-p256.pem`*