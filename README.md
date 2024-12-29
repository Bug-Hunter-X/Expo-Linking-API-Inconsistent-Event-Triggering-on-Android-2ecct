# Expo Linking API Inconsistent Event Triggering on Android

This repository demonstrates a bug in the Expo `Linking` API where `Linking.addEventListener` does not reliably trigger events when the app is already running, specifically on Android.  The bug is more likely to occur when the app is in the background and a deep link is opened.

## Reproduction

1. Clone this repository.
2. Run `expo start`.
3. Open the app.
4. In another app, open a deep link that targets this app (e.g., `myapp://somepath`).
5. Observe that the `Linking.addEventListener` callback may not always be called when the app is already open.

## Solution

The proposed solution involves adding a check to see if the app is in the background. If it's in the background, you can fetch the deep link using `Linking.getInitialURL` instead of solely relying on `Linking.addEventListener` which can be unreliable when the app is in the background.  In the foreground, continue to use `Linking.addEventListener`. This approach ensures that the deep link is handled consistently, regardless of the app's state.