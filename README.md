# Fig UI

This is a Figma plugin used for testing and as an example of how to use the [figma-styled-components](https://github.com/jhardy/figma-styled-components) library

### Current Snapshot

![image](https://user-images.githubusercontent.com/170681/63664207-7c7cc500-c77a-11e9-8129-50fa276abc2f.png)


---

### Usage 

Clone this repo and install this plugin locally under the development section of the the plugin page in Figma. To open it go to the plugin menu and select `fig-ui`. If you make changes to the plugin, make sure you build it first by following the directions below.

### Building This Plugin

This plugin template uses Typescript. If you are familiar with Javascript, Typescript will
look very familiar. In fact, valid Javascript code is already valid Typescript code.

Typescript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using Typescript requires a compiler to convert Typescript (code.ts) into Javascript (code.js)
for the browser to run.

To get the TypeScript compiler working:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Install the TypeScript compiler globally: `sudo npm install -g typescript`.
3. Open this directory in Visual Studio Code.
4. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "tsc: watch - tsconfig.json". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
