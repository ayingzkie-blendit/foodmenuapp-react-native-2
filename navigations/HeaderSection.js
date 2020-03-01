import React, {useState, useContext} from 'react';
import {ThemeContext} from '../context/theme-context';
import {dark, light} from '@eva-design/eva';

import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';

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
  const {route, navigation} = props;
  const onBackPress = () => {};
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const renderLeftControl = () => <BackAction onPress={onBackPress} />;

  const renderRightControls = () => [
    <EditAction />,
    <MenuAction onPress={toggleDrawer} />,
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <DarkAction onPress={toggleTheme} theme={theme} />
      )}
    </ThemeContext.Consumer>,
  ];

  return (
    <TopNavigation
      title={route.name}
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
}
