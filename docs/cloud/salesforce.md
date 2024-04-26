### Overview
Embever Cloud integrates seamlessly with salesforce to send the data to and from Salesforce. This enables the customers to use the data from their deices further in salesforce to make the business decisions.
To connect your devices from Embever cloud to salesforce you just need to connect your salesforce organisation to Embever Cloud from the console, install the Embever IoT Core Salesforce App and synchronize the devices.
After the devices are successfully connected to the salesforce organization, Embever cloud will send and receive the data to and from salesforce via the specified platform Events which are availabe in the Embever IoT Core Salesforce App Package.

### Embever IoT Core Salesforce App

Embever IoT Core Salesforce App contains the necessary salesforce components that are used to connect the salesforce organisation to Embever IoT Core.
This app should be installed in the salesforce organistion to be able to communicate with the Embever IoT Core from salesforce. You can install this app
while creating a salesforce connection in the Embever IoT Core console.

The package contents can be categorized into mainly two groups. 

1. [Platform Events](#platform-events)
2. [Utility Functions](utility_functions)


#### Platform Events

Embever IoT Core Salesforce App Package contains three different Platform Events definition, which is used to communicate between your salesforece organisatio 
and Embever IoT Core.

The platform events are defined are as follows:

1. [Device Messge](#device-message)
2. [Outbound Message](#outbound-message)
3. [Inbound Message](#inbound-message)


##### Device Messsage

Platform Event for Devices is primarily used to syncronize devices from IoT Core to Salesforce. In Salesforce users can listen
to this platform event and update or create their own custom Device objects using the information from the platform event.

| Label         | API Name                          | Description                                                                                                                            | Data Type | Required |
|---------------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| DeviceId      | embevercore__DeviceId__c         | ID of the device in Embever IoT Core                                                                                                  | Text      | Yes      |
| Device Name   | embevercore__DeviceName__c       | Alias Name of the device in Embever IoT Core                                                                                          | Text      | Yes      |
| Device Type   | embevercore__DeviceType__c       | Indicates the type of the device connectivity technology. Contains 'virtual' for virtual devices. Otherwise contains the type of connectivity technology the device is using to communicate to Embever Core. | Text      | Yes      |
| Application Id| embevercore__ApplicationId__c    | The Application Id of the application the device has been assigned to in Embever Core.                                               | Text      | Yes      |
| Activated     | embevercore__Activated__c        | Indicates the activation status of the device. If false, the device has not been activated and cannot send or receive messages. Devices can be activated and deactivated in Embever Core.                                                                                                                          | Checkbox  | Yes      |
| Date/Time     | embevercore__DateTime__c         | The Date/Time a message was issued.                                                                                                   | Date/Time | Yes      |

Example:

    {
      "embevercore__DateTime__c": "2022-02-23T11:46:39.357Z",
      "CreatedById": "0057Q000002LlABCQA0",
      "embevercore__DeviceName__c": "HellowWorldDev",
      "CreatedDate": "2022-02-23T11:46:40.212Z",
      "embevercore__ApplicationId__c": "1c43d388-ab3b-4677-9f51-05dfg597a02d",
      "embevercore__Activated__c": true,
      "embevercore__DeviceId__c": "xyzA",
      "embevercore__DeviceType__c": "other"
    }



##### Inbound Message

Inbound Message event is used to publish the transaction messages from Embever IoT core to the salesforce organisation. 
Cases when inbound message platform events are used:

1. When device sends an event
2. When device sends a result for an action in Embever IoT core
3. When an action status is updated
    
By simply subscribing to this Plaform event from salesforce you can get the transaction messages from Embever IoT Core.
Here we refer both the IoT Core Event and Action as a Transaction. 

| Label            | API Name                         | Description                                                                                                                                                                                                                           | Data Type        | Required          |
|------------------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------------------|
| Type             | embevercore__Type__c            | Indicates the type of the message. Allowed values are 'action' and 'event'.                                                                                                                                                          | Text             | Yes               |
| Context Id       | embevercore__ContextId__c       | Contains the embevercore__Outbound__e.embevercore__ContextId__c for a specific action to link between the outbound and inbound action message if desired. In most cases, this should be the Salesforce Record Id of the Device Action Record that triggered the creation of the Outbound Message | Text             | No                |
| Created By Core  | embevercore__CreatedByCore__c   | Indicates whether the message originated in Embever Core or within Salesforce. When true, the messages originated outside of this Salesforce Organization.                                                                           | Checkbox         | No (Defaults to Unchecked) |
| Date/Time        | embevercore__DateTime__c        | The Date/Time a message was issued.                                                                                                                                                                                                  | Checkbox         | Yes               |
| Device Id        | embevercore__DeviceId__c        | Contains the Embever Core Device Id of the device the message is related to.                                                                                                                                                          | Text             | Yes               |
| Id               | embevercore__Id__c              | Unique id of the message within Embever Core. Can be either action id or event id from Embever IoT Core.                                                                                                                             | Number           | Yes               |
| Name             | embevercore__Name__c            | Contains the event or action name the device used when sending the payload, e.g. "currentLocation".                                                                                                                                   | Text             | Yes               |
| Payload          | embevercore__Payload__c         | Contains the message payload in JSON format. Can be a JSON object, JSON array, or JSON value.                                                                                                                                        | Long Text Area   | No                |
| Status Id        | embevercore__StatusId__c        | Id of the Status of the Action/Event in Action/Event Lifecycle (e.g. 'action_sent') as in the Embever IoT Core.                                                                                                                      | Number           | No                |
| Status Name      | embevercore__StatusName__c      | Status of the Action/Event in Action/Event Lifecycle (e.g. 'action_sent').                                                                                                                                                           | Text             | No                |
| Status Changed At| embevercore__StatusChangedAt__c | Date Time when the status of the transaction changed.                                                                                                                                                                                 | DateTime         | No                |

    
       
Example:
Inbound Platfrom event body when sending IoT core event to Salesforce.

    {
      "embevercore__DateTime__c": "2022-02-23T08:45:13.889Z",
      "embevercore__StatusChangedAt__c": null,
      "embevercore__Name__c": "wakeUp",
      "embevercore__StatusName__c": null,
      "embevercore__ContextId__c": null,
      "embevercore__DeviceId__c": "xyzA",
      "embevercore__StatusId__c": null,
      "CreatedById": "0057Q000002LlABCQA0",
      "embevercore__CreatedByCore__c": false,
      "CreatedDate": "2022-02-23T08:45:15.364Z",
      "embevercore__Type__c": "event",
      "embevercore__Id__c": 15032,
      "embevercore__Payload__c": "{\"lat\": 525841746, \"lon\": 112812903}"
    }


##### Outbound Message

Outbound Message platform event is used to send message from salesforce organisation to Embever IoT Core.

Cases when outbound message platform events are used:

1. When an action is to be sent to the device
2. Cancel an action

| Label            | API Name                         | Description                                                                                                                                                                                                                               | Data Type        | Required          |
|------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------------------|
| Type             | embevercore__Type__c            | Indicates the type of the message. Only 'action' is allowed as a value for outbound messages.                                                                                                                                            | Text             | Yes (defaults to "action") |
| Operation        | embevercore__Operation__c       | Indicates if the message should create a new action or cancel a pending action. If set to 'cancel', the action id to be canceled needs to be provided in embevercore__Id__c.                                                               | Text             | No                |
| Context Id       | embevercore__ContextId__c       | Can be set to a value that will be sent back in the embevercore__Inbound__e.embevercore__ContextId__c field for related action responses. In most cases this should be the Salesforce Record Id of the Device Action Record that triggered the creation of the Outbound Message. | Text             | No                |
| Created By Core  | embevercore__CreatedByCore__c   | Indicates whether the message originated in Embever Core or within Salesforce. When true, the messages originated outside of this Salesforce Organization.                                                                             | Checkbox         | Yes (Defaults to Unchecked) |
| Device Id        | embevercore__DeviceId__c        | Contains the Embever Core Device Id of the device the message is related to.                                                                                                                                                            | Text             | Yes               |
| Id               | embevercore__Id__c              | Unique id of the message within Embever Core. Can be either action id or event id from Embever IoT Core.                                                                                                                               | Number           | No                |
| Name             | embevercore__Name__c            | Needs to be set to the Action Name that tells the Device how to handle the Payload, e.g. "setSettings".                                                                                                                                 | Text             | Yes               |
| Payload          | embevercore__Payload__c         | Contains the message payload in JSON format. Can be a JSON object, JSON array, or JSON value.                                                                                                                                          | Long Text Area   | No                |
| Service Level    | embevercore__ServiceLevel__c    | Can be set to the desired service level for the action. Defaults to 0. Valid service levels are: 0 - fire and forget, 1 - ensure the device received the message, 2 - ensure the device processed the message (with guaranteed response)                                                         | Number           | No                |


Example : Outbound Platfrom event body when sending IoT core Action from Salesforce.

    {
        "embevercore__Operation__c": "create",
        "embevercore__DeviceId__c": "xyzA",
        "embevercore__Name__c": "setLED",
        "embevercore__Payload__c": "{ \"LED\": \"off\" }",
        "embevercore__ServiceLevel__c": 2,
        "embevercore__ContextId__c": "a027Q00000198BpQAI"
    }



#### Utility Functions

Apart from the platform events IoT core salesforce app also contains some utility functions which can be used to transform data.
The utilty functions defined on the IoT Core salesforce app as an Apex Class are shown below.

| Name              | Description                                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------------------|
| GetJsonBoolean    | Returns the value for a specific key with Boolean type from a JSON string                                      |
| GetJsonDateTime   | Returns the value for a specific key with DateTime type from a JSON string                                      |
| GetJsonDecimal    | Returns the value for a specific key with Decimal type from a JSON string                                       |
| GetJsonKeyExists  | Returns true if a specific key exists in a JSON string else returns false                                        |
| GetJsonString     | Returns the value for a specific key with string type from a JSON string                                         |
| GetJsonValue      | Returns a valid JSON object as a JSON string                                                                    |



### Examples

#### Synchronizing devices to Salesforce

When you are synchronizing all the devices to Salesforce from the Embever IoT Core console, a the Device Message Platfrom Event is published to 
your salesforce organisation for each device in your salesforce connection.

Example:  Payload of the message on the Device Message Platfrom event on Synchronize Devices

    {
      "embevercore__DateTime__c": "2022-02-23T11:46:39.357Z",
      "CreatedById": "0057Q000002LlABCQA0",
      "embevercore__DeviceName__c": "HellowWorldDev",
      "CreatedDate": "2022-02-23T11:46:40.212Z",
      "embevercore__ApplicationId__c": "1c43d388-ab3b-4677-9f51-05dfg597a02d",
      "embevercore__Activated__c": true,
      "embevercore__DeviceId__c": "xyzA",
      "embevercore__DeviceType__c": "other"
    }


#### Receiving Events on Salesforce

All the events from the devices connected to your salesforce organisation will be published to the Inbound message Platform event with type event.
You can read from the Inbound message Platform event from your salesforce instance and can use it further.
E.g. 
Event in Embever IoT Core
    
    {
        "url": "https://api.embever.com/v2/events/15032/",
        "id": 15032,
        "device": "xyzA",
        "sim": "89777777777777766",
        "type": "wakeUp",
        "payload": {
            "lat": 525841746,
            "lon": 112812903
        },
        "created_at": "2022-02-23T08:45:13.889841Z"
    }

Correspondig message received on Subscribing to the Inbound Message Platform event (embevercore__Inbound__e)
    
    {
      "embevercore__DateTime__c": "2022-02-23T08:45:13.889Z",
      "embevercore__StatusChangedAt__c": null,
      "embevercore__Name__c": "wakeUp",
      "embevercore__StatusName__c": null,
      "embevercore__ContextId__c": null,
      "embevercore__DeviceId__c": "xyzA",
      "embevercore__StatusId__c": null,
      "CreatedById": "0057Q000002LlABCQA0",
      "embevercore__CreatedByCore__c": false,
      "CreatedDate": "2022-02-23T08:45:15.364Z",
      "embevercore__Type__c": "event",
      "embevercore__Id__c": 15032,
      "embevercore__Payload__c": "{\"lat\": 525841746, \"lon\": 112812903}"
    }


#### Creating an Action from Salesforce
An Action in Embever IoT Core is the way to send message to the Device to perform certain actions. To create action on Embever IoT core
you can simply publish to the Outbound Message Platform event from your Salesforce organisation.

Example
Message published on Outbound Message Platform Event to create 'setLED' action for device 'xyzA'.

    {
        "embevercore__Operation__c": "create",
        "embevercore__DeviceId__c": "xyzA",
        "embevercore__Name__c": "setLED",
        "embevercore__Payload__c": "{ \"LED\": \"off\" }",
        "embevercore__ServiceLevel__c": 2,
        "embevercore__ContextId__c": "a027Q00000198BpQAI"
    }

Corresponding action created in the Embever IoT Core is as follows

    {
        "url": "https://api.embever.com/v2/actions/5530/",
        "id": 5530,
        "device": {
            "id": "xyzA",
            "name": "HellowWorldDev"
        },
        "type": "setLED",
        "payload": {
            "LED": "off"
        },
        "status": {},
        "webhooks": null,
        "service_level": 2,
        "cancelled": false,
        "finished": false,
        "result": null,
        "created_at": "2022-02-23T09:32:23.779159Z",
        "result_code": null,
        "expiry_date": null,
        "expired": false
    }

On creating an action Embever IoT core also publishes a message to the Inbound Message Platform with the information on action created and the corresponding action id.
Example: The payload of the Inbound message for action created is given below. The attributes 'embevercore__StatusName__c' contains the status 'action_created' and 'embevercore__Id__c'
is the id of the action in Embever IoT Core. 

    {
      "embevercore__DateTime__c": "2022-02-23T10:35:07.068Z",
      "embevercore__StatusChangedAt__c": null,
      "embevercore__Name__c": "setLED",
      "embevercore__StatusName__c": "action_created",
      "embevercore__ContextId__c": "a027Q00000198BpQAI",
      "embevercore__DeviceId__c": "xyzA",
      "embevercore__StatusId__c": null,
      "CreatedById": "0057Q000002LlABCQA0",
      "embevercore__CreatedByCore__c": true,
      "CreatedDate": "2022-02-23T10:35:07.896Z",
      "embevercore__Type__c": "action",
      "embevercore__Id__c": 5530,
      "embevercore__Payload__c": null
    }



#### Cancelling an Action from Salesforce
There are cases you nolonger want the action to be sent to the devices, in that case you can easily cancel the actions from salesforce.
To cancel an action you can use the same Outbound Message Platform event with the operation 'cancel'.

Example
Cancel the action with action id 5530, publish the following message to Outbound Message Platform event

    {
        "embevercore__Operation__c": "cancel",
        "embevercore__Id__c": 5530,
        "embevercore__DeviceId__c": "xyzA"
    }

Corresponding action in the Embever IoT Core is as follows, note the cancelled attribute is changed to true.

    {
        "url": "https://api.embever.com/v2/actions/5530/",
        "id": 5530,
        "device": {
            "id": "xyzA",
            "name": "HellowWorldDev"
        },
        "type": "setLED",
        "payload": {
            "LED": "off"
        },
        "status": {},
        "webhooks": null,
        "service_level": 2,
        "cancelled": true,
        "finished": false,
        "result": null,
        "created_at": "2022-02-23T09:32:23.779159Z",
        "result_code": null,
        "expiry_date": null,
        "expired": false
    }

On cancelling an action Embever IoT core also publishes a message to the Inbound Message Platform with the information on action cancelled and the corresponding action id.
Example: The payload of the Inbound message for action cancelled is given below. The attributes 'embevercore__StatusName__c' contains the status 'action_cancelled and 'embevercore__Id__c'
is the id of the cancelled action in Embever IoT Core. 

    {
        "embevercore__DateTime__c": "2022-02-23T10:41:36.891Z",
        "embevercore__StatusChangedAt__c": null,
        "embevercore__Name__c": "setLED",
        "embevercore__StatusName__c": "action_cancelled",
        "embevercore__ContextId__c": "a027Q00000198BpQAI",
        "embevercore__DeviceId__c": "xyzA",
        "embevercore__StatusId__c": null,
        "CreatedById": "0057Q000002LlABCQA0",
        "embevercore__CreatedByCore__c": true,
        "CreatedDate": "2022-02-23T10:41:37.603Z",
        "embevercore__Type__c": "action",
        "embevercore__Id__c": 5530,
        "embevercore__Payload__c": null
    }


#### Receiving response of an Action to Salesforce

A device can send the response for an action. This response is stored as an object on the result attribute of the action. For all the devices connected
to the salesforce instance, on receiving the response from the device Embever IoT core publishes the message to the Inbound Message Platfrom event of 
the connected salesforce organisations.

Example: Action on Embever IoT Core with a result

    {
        "url": "https://api.embever.com/v2/actions/5531/",
        "id": 5531,
        "device": {
            "id": "xyzA",
            "name": "HellowWorldDev"
        },
        "type": "setLED",
        "payload": {
            "LED": "off"
        },
        "status": {
            "action_sent": "2022-02-23T11:07:50.814981+00:00",
            "action_delivered": "2022-02-23T11:07:50.866270+00:00",
            "response_received": "2022-02-23T11:07:50.962695+00:00"
        },
        "webhooks": null,
        "service_level": 2,
        "cancelled": false,
        "finished": true,
        "result": {
            "led": "off"
        },
        "created_at": "2022-02-23T10:35:07.068386Z",
        "result_code": "Success",
        "expiry_date": null,
        "expired": false
    }
    


Corresponding message on the Salesforce Inbound Message Platform Event is given below. On recevieng the response the attribute 'embevercore__StatusName__c' contains 
'response_received', 'embevercore__StatusId__c' contains the status id from the Embever IoT Core and 'embevercore__Payload__c' contains the result of the action.

    {
        "embevercore__DateTime__c": "2022-02-23T11:07:50.962Z",
        "embevercore__StatusChangedAt__c": "2022-02-23T11:07:50.952Z",
        "embevercore__Name__c": "setLED",
        "embevercore__StatusName__c": "response_received",
        "embevercore__ContextId__c": "a027Q00000198BpQAI",
        "embevercore__DeviceId__c": "xyzA",
        "embevercore__StatusId__c": 2522,
        "CreatedById": "0057Q000002LlABCQA0",
        "embevercore__CreatedByCore__c": true,
        "CreatedDate": "2022-02-23T11:07:57.017Z",
        "embevercore__Type__c": "action",
        "embevercore__Id__c": 5531,
        "embevercore__Payload__c": "{\"led\": \"off\"}"
    }