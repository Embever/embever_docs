# Prerequisites

## Activate your Embever IoT Core Account
It's important to note that there is no provision for public signup within the Embever Console. Account creation is exclusively managed by administrative users of Embever and owners and admins of the organisation, ensuring controlled access to the platform's resources. Below are the steps involved in this process.
If your organisation already has an Embever IoT Core Accound, please ask the administrative user for your organisation to create an account for you.
You will receive and activation email. Please visit the activaiton link to setup your account.
After successfully setting up your account you should be abe to login to the Embever console under https://console.embever.com and browsable api under https://api.embever.com/.

## Have your hardware/simcard ready
Make sure you have the necessary hardware. You must have a simcard either an e-sim or a normal sim card in your device provided by Embever. This sim card will be used for the cellular connection to send data to the Embever IoT Core.

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

# View Events