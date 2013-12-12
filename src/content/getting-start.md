> **Note**: Please use SDK Manager to update first. Only download and install manually if you can't use SDK Manager for several reason.

The Android SDK is composed of modular packages that you can download separately using the Android SDK Manager. For example, when the SDK Tools are updated or a new version of the Android platform is released, you can use the SDK Manager to quickly download them to your environment. Simply follow the procedures described in Adding Platforms and Packages.

There are several different packages available for the Android SDK. Below describes most of the available packages and where they're located once you download them.

## Android SDK platforms

An SDK platform is available for every production Android platform deployable to Android-powered devices. Each platform component includes a fully compliant Android library and system image, sample code, emulator skins, and any version specific tools.


### [SDK Tools](tool.html)

Required. Your new SDK installation already has the latest version. Make sure you keep this up to date.

### [SDK Platform-tools](platform-tool.html)

Required. You must install this package when you install the SDK for the first time.

### [SDK Platform](platform.html)

Required. You must download at least one platform into your environment so you're able to compile your application. In order to provide the best user experience on the latest devices, we recommend that you use the latest platform version as your build target. You'll still be able to run your app on older versions, but you must build against the latest version in order to use new features when running on devices with the latest version of Android.

To get started, download the latest Android version, plus the lowest version you plan to support (we recommend Android 2.2 for your lowest version).

### [System Image](system-image.html)

Recommended. Although you might have one or more Android-powered devices on which to test your app, it's unlikely you have a device for every version of Android your app supports. It's a good practice to download system images for all versions of Android your app supports and test your app running on them with the Android emulator.

### [Android Support](addon.html)

Recommended. Includes a static library that allows you to use some of the latest Android APIs (such as fragments, plus others not included in the framework at all) on devices running a platform version as old as Android 1.6. All of the activity templates available when creating a new project with the ADT Plugin require this. For more information, read Support Library.

### [SDK Samples](http://hariadi.github.io/viewer/sample.html)

Recommended. The samples give you source code that you can use to learn about Android, load as a project and run, or reuse in your own app. Note that multiple samples packages are available — one for each Android platform version. When you are choosing a samples package to download, select the one whose API Level matches the API Level of the Android platform that you plan to use.
