# Cloud

## Data Model

### Device

Device is an entity in which the CaaM hardware is installed and sends data to the cloud. A device has a single or multiple sim cards which is used for the cellular conneciton.

### Events
Events are represents the data sent from the CaaM hardware to the Embever IoT core cloud. Event is used to trigger a transmission of a data. Each Event object is of a specific type and might have additional information (payload) that was sent by the hardware.

### Actions
Actions are the operations or instructions that are sent to the device. Each Action object is of a specific type and might have additional information (payload) that shall be sent to the device, e.g. some settings or other information that is needed to process the action. A corresponding response for the action can be sent by the device. 
An action can have different service level. A service level tells if the action is guranteed to be received by the device or not. Actions with Srevice level 0 are sent to the device and not guranteed to be delivered or processed by the device. Action with service level 1 is guranteed to be received by the device, and with service level 2 are gruanteed to be processed by the device.


### Files
Files can be sent to and from a CaaM hardware. 
<!-- specific actions
predefined paylods
fota updates -->


## OTA Update
<!-- Do we give a name to the cloud CaaM cloud/ Embever IoT Core Cloud -->
Embever IoT Core cloud provides an easy way to do Over the Air update. A deployment can be created for a group of devices and asssign a firmwary binary to the devices.This can be created using the API `/deployments` endpoint.
On the background the deployment creates a special type of Action with type `_fota` with service level 2 which is sent to the device. On receiving the `_fota` action the device then downloads the firmware from a file transfer server from the cloud and sends back the response on the corresponding action with the result.

!!! Note

    Currently it is not possible to upload your own firmware for OTA updates. You need to provide the firmware binarys to Embever to deploy the updates to your devices.

## Console
Embever IoT Core cloud provides the user interface to manage different resources via console. The console is reachable under link [https://console.embever.com](https://console.embever.com). Using the conosle you can

- Update the Details of your organisation
- Add Accounts for a user
- Update the Accounts
- Enable/Disable the OTP for users
- Create/Manage the Salesforce connections
- Navigate to the Browsable API

## Cloud API
The Cloud API provides an easy programmatic way to manage your resources as well as interact with the CaaM devices. The cloud API provides different endpoints for this purpose.
It is deployed under [](https://api.embever.com/). For details see [API Reference](/cloud/api)

## Developer Tools
Python API client
node API client