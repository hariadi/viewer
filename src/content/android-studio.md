> Install Android Studio manually.

Android Studio is a new Android development environment based on IntelliJ IDEA. Similar to Eclipse with the ADT Plugin, Android Studio provides integrated Android developer tools for development and debugging.

> **Caution**: Android Studio is currently available as an early access preview. Several features are either incomplete or not yet implemented and you may encounter bugs. If you are not comfortable using an unfinished product, you may want to instead download (or continue to use) the [ADT Bundle](http://developer.android.com/sdk/index.html) (Eclipse with the ADT Plugin).

## Android Studio Previews

Android Studio has a built-in preview update mechanism. The IDE connects regularly to the update server and will present a popup at startup when a new version is available.
Android Studio categories updates using "channels". There are 4 channels available:

### Canary channel
Canary builds are the bleeding edge, released about weekly. While these builds do get tested, they are still subject to bugs, as we want people to see what's new as soon as possible. This is not recommended for production.

### Dev channel
Dev builds are hand-picked older canary builds that survived the test of time. It should be updated roughly bi-weekly or monthly.

### Beta channel
Not used yet. This will be used when we'll have beta-quality releases. Right now Android Studio is considered preview-quality.

### Stable channel
Not used yet. That will be for version 1.0 and following stable milestones.

By default, Android Studio uses the Canary channel. To change that, use **File > Settings > Updates**:

![image](http://tools.android.com/_/rsrc/1380832144218/preview-channel/2013-10-03%20sa%200.2.11%20settings%20channels.png)

Viewer only display latest ***Canary*** and ***Dev*** channel Zip files (Android Studio without SDK).
