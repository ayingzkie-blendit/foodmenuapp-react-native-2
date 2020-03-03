/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  ApplicationProvider,
  IconRegistry,
  useTheme,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light, dark} from '@eva-design/eva';
import {AppNavigator} from './navigations/AppNavigator';
import {ThemeContext} from './context/theme-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

function App() {
  const theme2 = useTheme();
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

  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle(
      theme.theme === dark ? 'light-content' : 'dark-content',
    );
  }, [theme.theme]);

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={theme}>
        <ApplicationProvider mapping={mapping} theme={theme.theme}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
