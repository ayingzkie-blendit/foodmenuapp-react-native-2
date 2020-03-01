import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {
  Button,
  Card,
  CardHeader,
  ViewPager,
  Input,
} from '@ui-kitten/components';
import {AuthContext} from '../context/auth-context';

function Header(props) {
  return (
    <CardHeader
      title="Login"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        lineHeight: 13,
      }}
    />
  );
}
function Footer(props) {
  const {signIn} = React.useContext(AuthContext);
  const {username, password} = props;
  return (
    <View style={styles.footerContainer}>
      <Button style={styles.footerControl} size="small" status="basic">
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
    <Card
      header={Header}
      footer={() => <Footer username={username} password={password} />}>
      <View>
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
      </View>
    </Card>
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
  },
});
