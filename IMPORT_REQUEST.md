# Source import request

Import the upstream `alkisstam/sidebar` repository at the immutable `v2.2.0` tag into this independent Pixel Sidebar repository, then run the Android debug build. The visual redesign will be implemented on this isolated branch after the baseline import/build is verified.


Retry after correcting the upstream checkout workspace path. Preserve this request file and the workflow during import.

Retry import after replacing the unsafe rsync operation with a safe copy.

Retry import after excluding upstream .git metadata and restoring the destination origin.

Rebuild after configuring React Native to embed the JavaScript bundle in the standalone debug APK; verify the APK contains assets/index.android.bundle before publishing the artifact.

Rebuild after applying the standalone React Native debug bundle configuration after upstream import, and fail unless assets/index.android.bundle is present inside the APK.

Run the repaired workflow and verify that the standalone APK contains assets/index.android.bundle.
