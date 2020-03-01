/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light, dark} from '@eva-design/eva';
import {AppNavigator} from './navigations/AppNavigator';
import {ThemeContext} from './context/theme-context';

function App() {
  function toggleTheme() {
    console.log('executed');
    setTheme(state => ({
      theme: state.theme === dark ? light : dark,
      toggleTheme: toggleTheme,
    }));
  }

  let [theme, setTheme] = useState({
    theme: light,
    toggleTheme: toggleTheme,
  });

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={theme}>
        <ApplicationProvider mapping={mapping} theme={theme.theme}>
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
