import React from 'react'
import { SafeAreaView } from 'react-native';
import {HeaderSection} from '../navigations/HeaderSection';
import { Divider, Layout, Text } from '@ui-kitten/components';

function HomePage(props) {
    return(
        <SafeAreaView style={{alignItems: 'center', justifyContent: 'center' }}>
            <HeaderSection {...props}/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Details</Text>
            </Layout>
        </SafeAreaView>
    )
}

export default HomePage
