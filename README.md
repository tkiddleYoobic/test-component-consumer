# Test Component Consumer

This library is meant to be used with `test-component` to show issues with using Stencil built component libraries with an `@ionic/angular` app.

Feel free to fork it you need to have an app to prove out various issues.

- see the `test-component` repo, grab, build, and link it, then do the following with this repo
- git clone
- switch to branch "feat-undefined-complex-prop"
- npm i
- npm link test-component
- npm run start

Observe the console logs, for the home page the stencil component has defined Props in will load and did load (as expected).

Open the modal and look at the console logs, the prop passed to the modal as an Input is now undefined in will load. If the stencil version is reverted to 1.1.4 and the steps repeated it will be seen that the prop passed to the modal page is defined in will load.