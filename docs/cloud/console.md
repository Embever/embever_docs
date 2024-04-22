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
    - The owner can assign admin or a normal user role to the accounts. See [### User Roles](User roles) for more detail information on roles in Embever console.

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


### Delete an Account     

## Salesforce Integration

### Connect Salesforce organisation

### Manage Salesforce connections


