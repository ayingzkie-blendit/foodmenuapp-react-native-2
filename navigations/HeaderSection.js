import React, {useState} from 'react'

import {
    Icon,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-back'/>
);

const EditIcon = (style) => (
    <Icon {...style} name='edit'/>
);

const MenuIcon = (style) => (
    <Icon {...style} name='menu-outline'/>
);

const BackAction = (props) => (
    <TopNavigationAction {...props} icon={BackIcon}/>
);

const EditAction = (props) => (
    <TopNavigationAction {...props} icon={EditIcon}/>
);

const MenuAction = (props) => (
    <TopNavigationAction {...props} icon={MenuIcon}/>
);

export function HeaderSection(props) {

    const {route,navigation} = props;
    let [drawer, setDrawer] = useState(false);

    const onBackPress = () => {
    };
    const toggleDrawer = () => {
        navigation.toggleDrawer()
    };

    const renderLeftControl = () => (
        <BackAction onPress={onBackPress}/>
    );

    const renderRightControls = () => [
        <EditAction/>,
        <MenuAction onPress={toggleDrawer}/>,
    ];


    return (
        <TopNavigation
            title={route.name}
            leftControl={renderLeftControl()}
            rightControls={renderRightControls()}
        />
    )
}
