import React, {useReducer, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../pages/HomePageScreen';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Drawer as UIKittenDrawer,
  Layout,
  Text,
  Icon,
  DrawerHeaderFooter,
} from '@ui-kitten/components';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {LoginPageScreen} from '../pages/LoginPageScreen';
const Drawer = createDrawerNavigator();
import {AuthContext} from '../context/auth-context';

function DrawerContent({navigation, state}) {
  const {signOut} = React.useContext(AuthContext);

  const HomeIcon = style => <Icon {...style} name="home-outline" />;

  const SettingsIcon = style => <Icon {...style} name="settings-2-outline" />;

  const GridIcon = style => <Icon {...style} name="grid-outline" />;
  const LogoutIcon = style => (
    <Icon {...style} name="grid-outline" onPress={() => signOut()} />
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
    {
      title: 'Logout',
      icon: LogoutIcon,
    },
  ];

  async function onSelect(index) {
    if (index === drawerData.length - 1) {
      await signOut();
    } else {
      await navigation.navigate(state.routeNames[index]);
    }
  }

  const PersonIcon = style => <Icon {...style} name="person" />;

  const Header = style => (
    <DrawerHeaderFooter
      {...style}
      title="John Doe"
      description="React Native Developer"
      icon={PersonIcon}
    />
  );

  return (
    <UIKittenDrawer
      data={drawerData}
      selectedIndex={state.index}
      onSelect={onSelect}
    />
  );
}

export function AppNavigator() {
  const [reducer, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT', token: null}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerStyle={{
            paddingTop: getStatusBarHeight(true),
          }}
          drawerContent={props => <DrawerContent {...props} />}>
          {reducer.userToken == null ? (
            <Drawer.Screen
              name="Login"
              component={LoginPageScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                animationTypeForReplace: reducer.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            <>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Menus" component={HomeScreen} />
              <Drawer.Screen name="Settings" component={HomeScreen} />
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
