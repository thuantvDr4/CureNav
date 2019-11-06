/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Loading from './screens/Loading';
import SignUp from './components/SignUp'

import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native';

const Main = () =>  {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <Loading/>
            </SafeAreaView>
        </>
    );
};

//TODO: BEGIN styles
const styles = StyleSheet.create({
    container: {
         flex:1,
    },


});


export default Main;
