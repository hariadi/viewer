## Android SDK platforms

An SDK platform is available for every production Android platform deployable to Android-powered devices. Each platform component includes a fully compliant Android library and system image, sample code, emulator skins, and any version specific tools.


### SDK Tools

Required. Your new SDK installation already has the latest version. Make sure you keep this up to date.

### SDK Platform-tools

Required. You must install this package when you install the SDK for the first time.

### SDK Platform

Required. You must download at least one platform into your environment so you're able to compile your application. In order to provide the best user experience on the latest devices, we recommend that you use the latest platform version as your build target. You'll still be able to run your app on older versions, but you must build against the latest version in order to use new features when running on devices with the latest version of Android.

To get started, download the latest Android version, plus the lowest version you plan to support (we recommend Android 2.2 for your lowest version).

### System Image

Recommended. Although you might have one or more Android-powered devices on which to test your app, it's unlikely you have a device for every version of Android your app supports. It's a good practice to download system images for all versions of Android your app supports and test your app running on them with the Android emulator.

### Android Support

Recommended. Includes a static library that allows you to use some of the latest Android APIs (such as fragments, plus others not included in the framework at all) on devices running a platform version as old as Android 1.6. All of the activity templates available when creating a new project with the ADT Plugin require this. For more information, read Support Library.

### SDK Samples

Recommended. The samples give you source code that you can use to learn about Android, load as a project and run, or reuse in your own app. Note that multiple samples packages are available — one for each Android platform version. When you are choosing a samples package to download, select the one whose API Level matches the API Level of the Android platform that you plan to use. 