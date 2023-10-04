# Logging Module

The makes it possible to write logs by calling a simple function. The
usage is the same as the standard `printf` function:

``` c
p("Starting application: version %d", app_version);
```

## Setting up the

The process of setting up the is similar to the process which is used by
the . For example, using the Arduino Serial Library, the setup would be
the following:

``` c
// Integration function
void log_print(char *str){
    Serial.print(str);
}

void setup(){
    Serial.begin(9600);
    // Integration function registration
    p_registerPrint(log_print);
}
```

As the code examples shows, the registered function should be able to
handle a string argument. Setting up the using the Arduino framework can
be done by using the predefined support macros:

``` c
LOG_SETUP_ARDUINO;

void setup() {
    Serial.begin(9600);  // start serial for output
    LOG_REGISTER_ARDUINO;
}
```
