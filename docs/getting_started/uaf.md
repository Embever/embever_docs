# CaaM Application Framework

The CaaM Application Framework (UAF) provides a comprehensive set of APIs to accelerate the development of IoT applications, with built-in connectivity to the [Embever IoT Core](../links/embever_iot_core.md). This framework simplifies sending telemetry data to the cloud by offering easy-to-use APIs, reducing the complexity of implementing connectivity, secure communication, and other critical IoT tasks.

To learn more about the User Application Framework API, refer to the [UAF API Documentation](../links/uaf_api.md).

## Sending Telemetry Data to the Cloud Using UAF

This quick start guide demonstrates how to send device telemetry to the cloud. The [Embever IoT Core Browsable API](../links/iot_core_browsable_api.md) will be used to view the telemetry data.

### Prerequisites

Ensure the following requirements are met to complete this guide:

- An activated account for the Embever IoT Core. See [Creating an Embever IoT Core Account](/tutorials/console/account_mgmt).
- A supported hardware device with an Embever-provided SIM card. See [Supported hardware devices](./supported_hardware).
<!-- TODO: Supported hardware devices page -->
- Visual Studio Code installed on the development machine (optional but recommended).

## Sign In to Embever IoT Core Browsable API

Sign in to the [Embever IoT Core Browsable API](https://api.embever.com/). Keep the portal open while following this guide.

## Ensure the SIM Card Is Allocated to the Correct Organization

To list available SIM cards, go to the [SIM resource](https://api.embever.com/v2/sims/) endpoint. Verify that the SIM card used by the CaaM device is listed and activated. The `iccid` attribute of the SIM resource should match the ICCID of the physical SIM card in the CaaM device.

## Create a Device in the Embever IoT Core

A device instance in the Embever IoT Core represents a single physical IoT device.

!!! Note

    If the CaaM Development Kit was provided by Embever, the device may already be created in the Embever IoT Core. To check available devices, go to the [Devices API Endpoint](https://api.embever.com/v2/devices/). If the device is listed, skip this section.

The simplest way to create a device is by using the Browsable API, though other tools like Postman or curl can also be used. This guide will use the Browsable API to perform the task.

1. Visit the [Devices API Endpoint](https://api.embever.com/v2/devices/). Ensure that the correct account credentials are used.
2. Scroll to the bottom of the page to find a form for inputting device data. Both HTML and raw input formats are available for initiating a POST request to create a new device. The raw data format will be used in this example.
3. Set the media type field to `application/json`.
4. In the content field, input the following data:

    ```json
    {
        "name": "<your_device_name>",
        "activated": true,
        "sims": ["<iccid_of_sim>"]
    }
    ```

    Replace `<your_device_name>` with a unique name for the device (names should be unique within the organization). Replace `<iccid_of_sim>` with the ICCID of the SIM card used by the CaaM device.

5. Click the `POST` button. This will create a device in the Embever IoT Core. A similar object will be returned:

    ```json
    {
        "url": "https://api.embever.com/v2/devices/4w4QD/",
        "id": "4w4QD",
        "name": "<your_device_name>",
        "password": "**********************",
        "activated": true,
        "application": null,
        "webhooks": null,
        "meta": null,
        "sims": ["<iccid_of_sim>"],
        "created_at": "2024-06-14T07:37:23.361080Z"
    }
    ```

Once the device is created, it is ready to receive telemetry data from the CaaM device.

## Run the Sample Application

The CaaM Application Framework simplifies and accelerates IoT product development by providing essential IoT functionalities out of the box. These include telemetry data transfer, file transfers, firmware updates, and more. The framework handles complex connectivity, protocol management, and security implementations, allowing the focus to remain on building the application. For more details, refer to the [CaaM Application Framework](../concepts/app_framework).

### Step 1: Setting Up the Software Development Environment

{% include 'fragments/ncs_setup_uaf.md' %}

### Step 2: Get a Local Copy of the Embever User Application Framework Template

To obtain a local copy of the CaaM User Application Framework template, clone the repository or download the distributed archive.

> **Note**  
> This repository contains submodules necessary for its operation.

Use the following command to ensure that the submodules are downloaded:

```bash
git clone --recurse-submodules git@github.com:Embever/ebv_UAF_template.git
```

![Cloning the CaaM User Application Framework Template](./resources/ebv_uaf_template_git_clone.png)

### Step 3: Working with the UAF Template

To work with the UAF template, follow these steps to set up the environment and prepare the application for development:

1. **Open Visual Studio Code**: Once the repository is cloned, open Visual Studio Code.
2. **Import the UAF Template**: Import the cloned UAF template into the workspace.

{% include 'fragments/vscode_ncs_uaf_template_import.md' %}

### Step 4: Crypto Keys for Binary Encryption

To secure firmware, generate cryptographic keys for binary encryption. Follow the steps below to set up the necessary keys:

{% include 'fragments/mcuboot_pem_keys.md' %}

### Step 5: Compiling and Flashing

Once the crypto keys are set up, proceed with compiling and flashing the firmware onto the CaaM device:

1. **Compiling**: Use the build tools in Visual Studio Code to compile the project.
2. **Flashing**: After the compilation is complete, the firmware binaries are ready to be flashed to the CaaM device. This can be done by selecting the "Flash" option in the sidebar.

> **Note**: Depending on the specific CaaM device being used, the flashing process may differ. For example, the CaaM Mini does not have a built-in programmer, so an external programming tool must be used. For more details, see the [CaaM-OS Hardware Compatibility](/concepts/caam_hardware_compatibility) page.

<!-- TODO: Create the CaaM-OS hardware compatibility page -->

### Step 6: The Dash Button Sample Application

The UAF template includes several sample applications located in the `./samples` folder. The dash button sample application will be used to demonstrate sending telemetry data to the cloud.

1. **Add a Build Configuration**: Edit the existing build configuration or create a new one, as shown in the screenshots below:

    ![CaaM Dash Button Sample Build Configuration](./resources/vscode_ncs_dash_btn_add_build_config.png#only-light)
    ![CaaM Dash Button Sample Build Configuration](./resources/vscode_ncs_dash_btn_add_build_config_drk.png#only-dark)

2. **Select the Dash Button Application**: Add the following CMake argument to select the Dash Button sample application:

    ```bash
    -DUSER_APPLICATION="dash_button"
    ```

3. **Build and Flash**: After configuring, build the project and flash the application binary. Once flashed, the status LED on the device should turn on, indicating that the application is running. For development purposes, it is recommended to view the logs generated by CaaM-OS. To learn more about accessing the log messages, refer to the [CaaM-OS Logs](/concepts/caam_logs) section.

The CaaM-OS will complete the telemetry data transfer when the status LED begins blinking. For further explanation of the Dash Button sample application, refer to the [Dash Button Sample Application for the CaaM Application Framework](/samples/dash_button) article.

<!-- TODO: Create the CaaM-OS logs page -->

### Step 7: Viewing Telemetry Data in the Embever IoT Core Browsable API

After the CaaM device sends telemetry data, the data can be viewed in the Embever IoT Core using the Browsable API. Follow these steps:

1. **Open the Browsable API**: Visit `https://api.embever.com/v2/events/?device=<your_device_id>` to access the telemetry data.
2. **Replace `<your_device_id>`**: Substitute `<your_device_id>` with the actual ID of the CaaM device.

Telemetry data is represented as events. Each event object contains a type, which denotes a specific occurrence on the device, and a payload, which includes additional details about that occurrence. Below is an example of telemetry data sent by a device:

```json
[
    {
        "url": "https://api.embever.com/v2/events/123456/",
        "id": 123456,
        "device": "my-test-dev",
        "sim": "8988XXXXXXXXXXX",
        "type": "samples",
        "payload": {
            "temp": 20
        },
        "created_at": "2024-06-05T14:44:38.497395Z"
    }
]
```

The Embever IoT Core makes it easy to forward telemetry data to other cloud applications. For more details, refer to the following guides:

- [How to send data from the Embever IoT Core to other applications](/tutorials/integrations/webhooks),
- [Integration with Salesforce](/tutorials/integrations/salesforce),
- [Integration with Azure IoT Hub](/tutorials/integrations/azure_iot_hub)


## Next Steps

- [Sample Applications of the CaaM Application Firmware]()
- [CaaM Application Framework API]()
- [Best Practices for developing IoT applications with the CaaM Application Firmware]()
    

<!-- ## Have your hardware/simcard ready
- sim card
- Supported System on Chip (SoC) (Currently the system supports only nRF9160)

Tutorial: Introducing Embever Serial Protocol
Tutorial: Introducing Embever Application Framework

Notes:
Caam OS sends only private events

ESP 

Embever Application Framework-
    Static libaries, private (uneditable) +  public
    Has a user app folder (where the application resides)
    Compile the whole project to get the running application. 

CaaM Mini - 

 You must have a simcard either an e-sim or a normal sim card in your device provided by Embever. This sim card will be used for the cellular connection to send data to the Embever IoT Core.

Step 0: 
    Hardware ready... 
    Can be nRF DK/ Caam Mini / own hardware with SoC and the sim. Caam Mini has an embeded sim,  also has an option to add plastic sim.

Step 1:
- Setup the environment Nordic Connect SDK.
    https://github.com/Embever/embever_docs/blob/hardware/docs/tutorials/embedded/uaf/uaf_env_setup_guide.md

- Clone Application Framework repository from Embever 
https://github.com/Embever/ebv_UAF_template

- Take the Sample Applications part of the UAF template 
e.g. hello cloud
    change something values..
    The point here is to show how the user can send telemetry data from the applicaiton.
    The user doesnot need to change the sample script but know how to call the api looking at the example.
    send_event("<key>", "<value>")
    Change the values to whatever telemetry data you want to send. Replce Key with "temp", value with "27"


build the sample application
 - 

Flash the binary to your SoC
    Tutorial/Guide: How to flash the binary to CaaM Mini.
    How to flash a firmon nordic DK.

Check in your Browsable api

Another option:
Provide pre build binary, upload to the hardware. Can be with sample applications. Flash the binary and see the results.


ESP
- protocol definition

ESP and AF
ESP app itself is an application that implements the ESP protocol.


AF might be too overwhelming, can make use of the ESP tool.

# Sign in to Embever IoT Core
## Make sure you have a sim card allocated to your organisation
You can see the list of available sim cards in the browsable api under the link https://api.embever.com/v2/sims/.
Make sure the iccid of the sim that you have in your device is there in the list of sim cards.

E.g.


# Create a Device
You can create the device using the browsable api or from any other tools like postman or curl. To make requests to the api besides the browsable api you will need an application. 

TODO: Tutorial Read this how to get started with use the embever IoT Core api.

Now to create a Device using the Browsable api follow the following steps:

- On your browser open https://api.embever.com/v2/devices/. Make sure you are logged in with your account credentials.
- Goto the End of the page, you should see a form to save device data. You can use either HTML form or Raw Data to make a post request to create a device. We will use Raw Data for this example.
- On the Raw Data set the Media type field to application/json.
- On the content field. Put the  following.
```
{
    "name": "<your_device_name>",
    "activated": "true",
    "sims": ["<iccid_of_sim>"]
}
```
For this example we will set the basic required fields only. You can follow the api documentation for other fields.
Replace "\<your_device_name>" with a unique name, the name of the device should be unique within your organisation. Replace <iccid_of_sim> with the iccid of the simcard that you have on your device at hand.

Now, click the `POST` button on the bottom.

You should now see the details of the device created like this

TODO: <example>

TODO: <screenshots>





# Update the Frimware with User Application Framework

# Send Events (Telemetry Data)

# View Events -->