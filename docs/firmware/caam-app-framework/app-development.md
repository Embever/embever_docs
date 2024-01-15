# Application Development

The best way to start application development  with the CaaM Application Framework is by using the provided project template, the `ebv_uaf_template`.
To set up the working environment, see the [relevant guide](../../tutorials/embedded/uaf/uaf_env_setup_guide.md) in the tutorial section.
The project template contains the embedded IoT core library the `ebv_conn_lib` as a static library with header files and the CaaM Application Framework source code. This project template is already configured to compile with the Zephyr RTOS and nRF Connect SDK.

## Structure of the template project

The project template contains the following important folders and files:

- `ebv_conn_lib` CaaM OS libraries
- `./ebv_conn_lib/ebv_lib` Embedded IoT Core static library
- `./ebv_conn_lib/ebv_lib/public_headers` ebv_conn_lib API header files
- `./ebv_conn_lib/ebv_src` CaaM Application Framework source code
- `examples` CaaM Application Framework examples
- `scripts` Utility scripts
- `usr_src` User application source directory
- `CMakeLists.txt` Top level CMake file
- `KConfig` Top level Kconfig file
- `prj_common.conf` Common configurations for the CMake project

### User application source directory

The most important folder is `usr_src` from a development perspective since this is the default working directory for the user application source files.

!!! note

    It is worth to mention that this location of the user application source files can be updated at any time by editing the `user_app_directory_name` cmake variable in the top level CMakeLists.txt file.

The user application source directory contains the following files:

- `usr_main.c` User application main source file. This is a placeholder for the user source code
- `user_main.h` User application header file. This is a placeholder for the user source code
- `Kconfig` Kconfig configuration file for the user application. This is referenced from the top level KConfig file
- `CMakeLists.txt` CMake file for the user application. This is referenced from the top level CMake file
- `prj.conf` Configuration file for the user application
- `app.overlay` DeviceTree overlay for the user application
- `boards` Directory for holding the custom board definitions, this is an optional directory and not part of the template

