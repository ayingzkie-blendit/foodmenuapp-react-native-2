import React from 'react';
import {dark, light} from '@eva-design/eva';

export const ThemeContext = React.createContext({
  theme: light,
  toggleTheme: () => {},
});
