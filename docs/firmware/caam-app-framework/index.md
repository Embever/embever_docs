# CaaM Application Framework

The CaaM Application Framework is a collection of software components that allows to combine the capabilities of the Embever IoT Core with a custom application logic. This means, that the CaaM OS with all its components can be used to build and deploy custom applications. The application framework provides an independent execution context 
for the custom application which is call user application or user_app in the development environment. The user_app 
also has access to all the underlying components of the Zephyr RTOS as well, so the development environment is almost the same as a regular embedded application.