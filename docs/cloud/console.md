# Embever Console
Embever console is the web based interface that allows users to interact and manage their resources in Embever cloud. Using the embever console the user can manage accounts, organisatoin details and also manage integration with exteranal systems. It is reachable under this link [https://console.embever.com](https://console.embever.com).

## Creating an Account on Embever Console
It's important to note that there is no provision for public signup within the Embever Console. Account creation is exclusively managed by administrative users of Embever and owners and admins of the organisation, ensuring controlled access to the platform's resources. Below are the steps involved in this process.

1. Organisation creation
    -  An organisation is created by the Administrative user of Embever. This step involves adding essential organisatinal details to the organisation.
2. Owner Account Setup
    - An owner account is setup by the Administrative user of Embever with the given email address from the related organisation.
3. Email Activation for Owner Account
    - An activation email is sent to the owner's email
4. Owner Account Activation
    - After the owner confirms their account activation, the owner gains access to the console.
5. User Account Creation by Owner
    - The owner can now create additional user accounts for the individuals within the organisation.
    - The owner can assign admin or a normal user role to the accounts. See [User Roles](#user-roles) for more detail information on roles in Embever console.

## Login and Logout to the Console

### Login
To access the Embever Console, visit console.embever.com and enter your credentials (username and password) in the provided fields. Click on the "Sign In" button to authenticate your account. Upon succesful authentication you will be redirected to the homepage.

### Logout
To log out of your Embever Console account, simply click on the "Logout" button which looks like a switch button located in the top-right part of the dashboard. This action will terminate your session and return you to the login screen.

!!! Recommendation


    It is always a best practice to always log out after you finish your work.

### Forgot Password
If you forget your password and are unable to log in, the Embever Console provides a simple and secure process to reset it. Follow the following steps to reset your password.

1. Forgot Password Link: On the login page, locate and click on the "Forgot Password" link below the login form. You will be redirected to a another page.
2. Email Verification: Enter the username and email address associated with your Embever IoT Core account and click on submit.
3. Reset Link: You will receive an email containing a reset link to the provided email address. The link is valid only for 7 days.
4. Password Reset: Click on the reset link in the email to navigate to the password reset page.
5. New Password: Enter your username and set a new password for your account.
6. Login: Once your password is successfully reset, you would be logged in and redirected to the home page of the console.

This process ensures that even if you forget your password, you can regain access to your account securely and efficiently. If you encounter any issues during the password reset process, please don't hesitate to contact us for assistance.

<!-- ### Resetting your password
!! Only available for the staff user.
To reset you password follow the following steps.

1. After logging in, navigate to ththe password change link. [https://console.embever.com/admin/password_change/] (https://console.embever.com/admin/password_change/)
2. Enter your Old password and new password.
3. Click on 'CHANGE MY PASSSWORD' button
4. After the password is changed successfully you will be redirected to the page with the Password change successful message. -->

## Organisation Details
Organisation Details are first added by the Administrative users of Embever as provided by the respective organisation. It mainly contains the informatin of the Organisation like name and contact information.

### Edit Organisation Details
A user with the owner role of the organisation can change their organisation details. Organisational users with other roles (admin and normal users) will be only be able to see the details but not edit it.
To change the organisation details follow the following steps.

1. Login to the console.
2. On the top right corner of the home screen click on the organisation icon. This will open a page with the organisation details.
3. Edit your organisation details.
4. Click on the submit button. If there are any errors please correct them and submit it.
5. After the details are save successfully you will see edit successfull message on the top of the form itself.

## Accounts Management

Embever IoT Core offers different user roles, each with specific permissions to manage resources effectively.

### User Roles
The users are primarily categorized into two groups.

1. Administrative users
    
    Administrative users are responsible or managing the Embever Console and the resources. These users are further categorized into two roles.

    1. Superuser: Has full control over all aspects of the Embever Console, including user management and resource allocation.

    2. Staff User: Assigned to users for specific administrative tasks by superusers.

2. Organization Users

    Organization users are individuals associated with a particular organization and are typically assigned specific roles and permissions within the system. The organisational users are categorized further into three roles.

    1. Owner: Has the highest level of authority within the organization. Can perform administrative tasks and manage other users.

    2. Admin User: Granted administrative privileges within the organization, such as user management and resource allocation.
    
    3. Normal User: Has limited permissions, typically restricted to accessing and interacting with assigned resources.


!!! Note

    There are additional user types specifically for API which doesnot have accounts for logging into the console. They are called organisation user and applicaiton user. Organisation user and application user are created automatically when an organisation or an application is created. These are created to provide scope on the organisational level and applicaiton for api requests. 

#### Owner User
Owners possess the highest level of control and can perform the following administrative actions.

1. Assign Another Owner: Owners can designate another user as an owner of the organization.

2. Create Users: Owners can create new users within the organization.

3. Edit Users: Owners can modify user details and roles.

4. Delete Users: Owners cannot directly delete users. Contact support@embever.com for user deletion requests. However, owners can deactivate the users, the deactivated users are no longer able to login and use the console.


#### Admin User
Admin users have the second highest level of authority and can perform the following administrative actions.

1. Create Users: Admin users can create new users within the organization.

2. Edit Users: Admin user can modify normal user details and roles. Admin user cannot modify details of other admin users and owner.

3. Deactivate normal Users: Admin users can deactivate normal users. 



#### Normal User
Normal organisation users have the lower level of authority and can not perform any administrative actions. They can only change thier own details.


### Changing the ownership of the organization
A current owner can assign another user of the organisation as a owner. This can either be done by the Administrative user of Embever on the request from the owner of the organisation or by the owner user of the organisation him/herself. The following steps needs to be carried out to change the owner user of the organisation.

1. Login to the Embever console as a owner user.
2. On the Manage accounts section of the homepage click on "Manage your organisation accounts". You will be  redirected to the page with list of users on your organisation.
3. If there are not any users besides you click on "Create New Account" and create a user to whom you want to transfer the ownership to.
4. On, the users list, click on the "Edit" button for the specific user. Now you will see the Update Account form with the user details.
5. Go to Role input and select "Owner". Make sure the user you are transferring the ownership is activated before you change the role to Owner.
6. The user that you changed the owner role will receive an email with the ownership transfer request. The email contains a secure link to accept or decline the request. This link is valid for 7 days only. If the link is expired you have to reinitiate the process.
7. When the user accepts the ownership transfer request. The designated user role will be changed to the owner and your role will be changed to a normal user.

### Update your own Account Details
As a user you can update your account details like
To change your account details follow the following steps

1. Login to the console.
2. Click on the account icon on the top right part of the menu. A form with your details will open.
3. Edit your details and click submit. If the details are upadated successfully you will see a success message on the top of the form.

###  OTP Login
OTP stands for one time password. When OTP is enabled for your account, embever console sends an email to your account email with a token. This token should be entered when you login else you are not able to log in to the console. This is one of the ways to make check if the person trying to log in is legit one. 

!!! Recommendation

    OTP is used for the tow factor authorization and turning this on always is highly recommended to secure your account from different attacks.

#### Activate OTP
To enable  OTP for your account follow the following steps.

1. Login to the console.
2. Click on the account icon on the top right part of the menu. A form with your details will open.
3. On the OTP input set the checkbox to checked to enable OTP for your account and click submit.
4. You will receive an email with verification link to verify the OTP along with the verification code.
5. Click on the verification link and enter the verification code to verify.
6. Upon successful verification you will again receive an email notification that OTP login has been activated and verified.

#### Deactivate OTP
To enable disable OTP for your account follow the following steps.

1. Login to the console.
2. Click on the account icon on the top right part of the menu. A form with your details will open.
3. On the OTP input uncheck the checkbox to disable OTP for your account and click submit.
4. Upon successful update , you will receive an email that your OTP login has been deactivated.


### Deactivate an Account     
To deactivae an accont follow the following steps

1. Login to the console as owner or admin user.
2. On the 'Manage Accounts' seciton of the homepage click on 'Manage your organisation's Accounts'. This will open a page with list of your organization accounts.
3. Click on the 'Edit' button for the account you want to deactivate. This will open a 'Update Account' form for the selected user account.
4. Uncheck the 'Activated' checkbox on the form an click 'Submit'.
5. Updon successful deactivation you will get the success message and the status of the user account changes from active to inactive.

!!! Note

    There is no option to delete user accounts from the console. Contact Embever at support@embever.com for account deletion requests.



## Salesforce Integration

### Connecting Your Salesforce Organisation to Embever Cloud
Your salesforce Organisation can be easily integrated to the Embever IoT core. This enables you to use the data from
Embever IoT core on different business cases on your salesforce organisation.

To connect your salesforce instance to Embever IoT Core follow the following steps:

1. Go to  [https://console.embever.com/integration/salesforce/new/](https://console.embever.com/integration/salesforce/new/)
2. Select the your type of organisation and an alias. Click on Authorize
3. Next Authorize CAAM Embever by logging in with your salesforce credentials and clicking Allow. After that you will be redirected to the IoT Core console.
4. Install the Embever IoT Core Salesforce App.
5. After installing the IoT Core Salesforce App, Go back to your connection page on the IoT Core console
6. On Install Salesforce App section, click on "I have already installed the App"
7. Next, select the applications for the integration.

Now you can send or receive data from the devices on the attached applications from salesforce.

Optionally,

1. You can install the sample Embever IoT Core Salesforce App by clicking the "Install Example App in Salesforce" button on the last section.
2. Synchronize all the devices to Salesforce by simply clicking the "Synchronize All Devices to Salesforce" button.


After sucessfully connecting the devices to your salesforce organisation you can now use the [Platform Events](#platform_events) defined in the IoT Core App
to communicate to the device via Embever IoT Core.


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



