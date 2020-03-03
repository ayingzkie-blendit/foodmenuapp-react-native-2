import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {HeaderSection} from '../navigations/HeaderSection';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/auth-context';

function HomePage(props) {
  return (
    <Layout style={styles.container}>
      <SafeAreaView>
          <HeaderSection {...props} />

        <Text style={styles.text}>Welcome To React Native UI Kitten!</Text>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  text: {
    paddingHorizontal: 16,
  },
});

export default HomePage;
