import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/HomePageScreen'
import { Drawer as UIKittenDrawer, Layout, Text,Icon } from '@ui-kitten/components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const Drawer = createDrawerNavigator();

function DrawerContent({navigation, state}){

    async function onSelect(index) {
        await navigation.navigate(state.routeNames[index]);
    }

    const HomeIcon = (style) => (
        <Icon {...style} name='home-outline'/>
    );

    const SettingsIcon = (style) => (
        <Icon {...style} name='settings-2-outline'/>
    );

    const GridIcon = (style) => (
        <Icon {...style} name='grid-outline'/>
    );

    const drawerData = [
        {
            title: 'Home',
            icon: HomeIcon,
        },
        {
            title: 'Menus',
            icon: GridIcon,
        },
        {
            title: 'Settings',
            icon: SettingsIcon,
        },
    ];

    return(
        <UIKittenDrawer
            data={drawerData}
            selectedIndex={state.index}
            onSelect={onSelect}
        />
    )
}

const HomeNavigator = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
            paddingTop: getStatusBarHeight()
        }}
        drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Menus' component={HomeScreen}/>
            <Drawer.Screen name='Settings' component={HomeScreen}/>
    </Drawer.Navigator>
);

console.log(getStatusBarHeight(),"height")

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);
