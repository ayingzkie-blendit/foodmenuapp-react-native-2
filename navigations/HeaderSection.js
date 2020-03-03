import React, {useState, useEffect} from 'react';
import {ThemeContext} from '../context/theme-context';
import {AuthContext} from '../context/auth-context';
import {dark, light} from '@eva-design/eva';

import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  Button,
} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';

const BackIcon = style => <Icon {...style} name="arrow-back" />;

const EditIcon = style => <Icon {...style} name="edit" />;

const MenuIcon = style => <Icon {...style} name="menu-outline" />;
const DarkIconOutline = style => <Icon {...style} name="moon-outline" />;
const DarkIcon = style => <Icon {...style} name="moon" />;

const BackAction = props => <TopNavigationAction {...props} icon={BackIcon} />;

const EditAction = props => <TopNavigationAction {...props} icon={EditIcon} />;

const MenuAction = props => <TopNavigationAction {...props} icon={MenuIcon} />;
const DarkAction = props => (
  <TopNavigationAction
    {...props}
    icon={props.theme === dark ? DarkIcon : DarkIconOutline}
  />
);

export function HeaderSection(props) {
  const [token, setToken] = useState(null);
  const {route, navigation} = props;
  const onBackPress = () => {};
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  console.log(props, 'route');

  const renderLeftControl = () =>
    props.userToken ? <BackAction onPress={onBackPress} /> : <></>;

  const renderRightControls = () => [
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        // <DarkAction onPress={toggleTheme} theme={theme} />
        <Button
          icon={theme === dark?DarkIcon: DarkIconOutline}
          onPress={toggleTheme}
          size={'small'}
          style={{borderRadius: 25}}>
          Dark mode
        </Button>
      )}
    </ThemeContext.Consumer>,
    props.userToken ? <MenuAction onPress={toggleDrawer} /> : <></>,
  ];

  return (
    <TopNavigation
      title={route.name}
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
}
