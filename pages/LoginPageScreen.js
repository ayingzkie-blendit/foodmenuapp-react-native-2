import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {
  Button,
  Card,
  CardHeader,
  ViewPager,
  Input,
  Layout,
} from '@ui-kitten/components';
import {AuthContext} from '../context/auth-context';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderSection} from '../navigations/HeaderSection';

function Header(props) {
  return (
    <CardHeader
      title="Login"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    />
  );
}
function Footer(props) {
  const {signIn} = React.useContext(AuthContext);
  const {username, password} = props;
  return (
    <View style={styles.footerContainer}>
      <Button style={styles.footerControl} size="small" status="basic" onPress={()=> props.navigation.navigate('Registration')}>
        SignUp
      </Button>
      <Button
        style={styles.footerControl}
        size="small"
        onPress={() => signIn({username, password})}>
        Login
      </Button>
    </View>
  );
}

export function LoginPageScreen(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Layout
      style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <HeaderSection {...props} />

        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Footer username={username} password={password} {...props} />
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  footerControl: {
    marginHorizontal: 4,
    padding: 5,
      borderRadius: 25,
      width: 100
  },
});
