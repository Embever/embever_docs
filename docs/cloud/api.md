# REST API

## Overview

### About
You can use Embever cloud API to manage your resources in embever cloud as well as interact with your devices.

### Registrating on the API
For each organisation or user who uses Cloud as a Moudule, Embever creates creates a primary admin account to access the console and api of the Embever cloud. The primary admin user can create and manage the accounts and roles via the console or from the api.

!!! Note

    There is no public registration for the user in Embever Cloud. A primary admin user of your organisation can create an account for you to use the Embever Cloud.

### API Versions
The Embever Cloud REST API is versioned. To maintain the compatibility with the changes in the API, the API has different versions. Any breaking chages will be released in a new version. Any non breaking chages and fixes shall be applied to the existing version itself. When the new API version is released the older versions will still be supported. The versoning is incorporated in the base URL.
The API versoning follows the following format

`https://baseurl/<version>/path`

An example of the request URL with an API version is `https://api.embever.com/v2/devices`

!!! Note

    Version v1 is deprecated and no longer supported. The current api version is v2.

#### Supported API Versions
The following REST API versions are currently supported

- v2



### Browsable API
Embever cloud features a browsable api which facilitates the interaction with the REST API through any web browser. You can make API requests and surf through the API using the browsable API. The browsable api is available under the base url of the api `https://api.embever.com/`. 


## Using the API

!!! Note

    This document assumes that you have the basic idea on REST API requests and its elements.

Any request you make to the REST API includes an HTTP method and a path. You might need to include specific request headers, authenticaiton information, query parameters or body parameters depending on the API endpoints. For more detailed information see the [REST API reference document](api_reference.md).

    how to make the request, tokens...

### Authentication
Many endpoints on the REST API require authentication. The API uses JWT tokens to authorize requests to ressources. Your application can obtain an access token by posting an application token to the /authenticate endpoint (for creatinng application tokens refer to Tokens). The access token is used for the requests to the API, but has a short validity period. When it expires, the application token must be used again to gain a new auth token. The access token is passed in the request’s Authorization header.

#### Geting the application token

!!! Note

    This application should be kept seceretly. We recommend the application token to have an expiry date and change the application token time to time.

#### Getting the access and refresh token

#### Using the access token

#### Using the refresh token


### Pagination
When the response on REST API endpoints returns multiple items, it will be paginated to 100 items by default. For example `GET /devices/` will return only the first 100 devices even if there are 1700 devices.
The api offers a way to easily navigate through the items using the `link` header. The `link` header from the response can be used to request additional pages of data.


#### Using `link` headers
When a response to the endpoint is paginated, the response headers will include a `link` header. If the endpoint does not support pagination, or if all results fit on a single page, the `link` header will be omitted.
The `link` header contains url to fetch previous and the next page when applicable.
For example you can use curl with `--include` flag to see the response headers.

```
curl --include --request GET \
--url "https://api.embever.com/v2/devices/"
```

If the response is paginated the `link` header will look something like this

```
link: 
 <https://api.embever.com/v2/devices/?cursor=cj0xJnA9MjAyMi0wOS0yMiswNiUzQTE1JTNBMzUuMDc0MjIyJTJCMDAlM0EwMA%3D%3D>; rel="prev", 
 <https://api.embever.com/v2/devices/?cursor=cD0yMDIyLTA5LTIyKzA2JTNBMTElM0EwMi41NjkzNzQlMkIwMCUzQTAw>; rel="next"
```

- The URL for the previous page is followed by rel="prev".
- The URL for the next page is followed by rel="next".

The link to the previous page won't be included if you are on the first page of the result. Likewise, the link to the next page won't be included if you are onn the last page of the result. The URL in the link header use query parameter to navigate to the another page of results.

## Guides

### Creating Action

### Sending data to External Application
    
    .... using webhooks...

### Deploying the frimware to Devices

### Activating/Deactivating the Device

### Sending File to the Device

### Receiving a file from a Device





