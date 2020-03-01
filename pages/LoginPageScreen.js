import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Button, Card, CardHeader, Text} from '@ui-kitten/components';
import {AuthContext} from '../context/auth-context';

function Header(props) {
  return <CardHeader title="Login" />;
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
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
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
  },
  footerControl: {
    marginHorizontal: 4,
  },
});
