import React from 'react';
import {Layout, Input, Button} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderSection} from '../navigations/HeaderSection';
import {StyleSheet} from 'react-native';

export function RegistrationPageScreen(props) {
  return (
    <Layout style={{flex: 1}}>
      <SafeAreaView>
        <HeaderSection {...props} />
        <Input style={styles.input} placeholder="Fullname" />
        <Input style={styles.input} placeholder="E-mail" />
        <Input style={styles.input} placeholder="Password" />
        <Button style={styles.button}>Submit</Button>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginHorizontal: 16,
  },
  input: {
    paddingHorizontal: 16,
  },
});
