> New Build System to replace both the build system inside ADT and Ant.

Gradle is an advanced build system as well as an advanced build toolkit allowing to create custom build logic through plugins.

## Migrating from Eclipse

If you've previously developed for Android using Eclipse and would like to migrate to Android Studio, you should export your projects from Eclipse in order to generate Gradle build files. You can then import your project into Android Studio.

## Export from Eclipse

1. Update your Eclipse ADT Plugin (you must have version 22.0 or higher).
2. In Eclipse, select **File > Export**.
3. In the window that appears, open **Android** and select **Generate Gradle build files**.
4. Select the project you want to export for Android Studio and click Finish.

Your selected project remains in the same location but now contains a `build.gradle` file and is ready for Android Studio.

## Import into Android Studio


1. In Android Studio, close any projects currently open. You should see the **Welcome to Android Studio** window.
2. Click **Import Project**.
3. Locate the project you exported from Eclipse, expand it, select the **build.gradle** file and click OK.
4. In the following dialog, leave **Use gradle wrapper** selected and click **OK**. (You do not need to specify the Gradle home.)

Now that your project is imported to Android Studio, read [Tips and Tricks](http://developer.android.com/sdk/installing/studio-tips.html) for some help getting started.

> **Note**: It's possible to import an existing Android project to Android Studio even if you don't generate a Gradle build file from Eclipse—Android Studio will successfully build and run projects using an existing Ant build file. However, in order to take advantage of build variants and other advanced features in the future, we strongly suggest that you generate a Gradle build file using the ADT plugin or write your own Gradle build file for use with Android Studio. For more information about the Gradle build system, see the [Gradle Plugin User Guide](http://tools.android.com/tech-docs/new-build-system/user-guide).
