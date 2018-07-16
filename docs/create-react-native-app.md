## How to use `troila-mobile-ui` with create-react-native-app

### Install and Initialization

```bash
$ npm install -g create-react-native-app

# Note: The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it.
$ create-react-native-app my-app

$ cd my-app
$ npm start
```

You can also run `npm run ios` / `npm run android` in terminal to access the application in the MacOS or PC simulator.

### Import troila-mobile-ui

First we install troila-mobile-ui and [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)(A babel plugin for importing components on demand [principle](https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#Import-on-Demand)) from yarn or npm.

  ```bash
  $ npm install troila-mobile-ui --save
  $ npm install babel-plugin-import --save-dev
  ```

1. Modify the `.babelrc` config, then restart the service.  

    ```json
    {
      "presets": ["babel-preset-expo"],
      "plugins": [["import", { "libraryName": "troila-mobile-ui" }]],
      "env": {
        ...
      }
    }
    ```
2. Modify the `App.js` file, import `Text` component from troila-mobile-ui.

  ```js
  ...
  import { Text } from 'troila-mobile-ui';

  ...
  render() {
    return (
      ...
      <Text>troila-mobile-ui text</Text>
      ...
    );
  }
  ```  
