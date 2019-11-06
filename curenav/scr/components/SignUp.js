/**
 * company: Inapps
 * Project: CURENAV
 * Coder: thuantv
 * date : BEGIN-6/11/2019
 * team: Mobile
 */


// IMPORT LIBS
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

// IMPORT FILE


//TODO: BEGIN FUNCTION
const SignUp =() =>{
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.banner}>
                        <Text>SIGN UP</Text>
                    </View>
                    <View style={styles.banner}>
                        <Text>SIGN UP</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};


//TODO: BEGIN styles
const styles = StyleSheet.create({
    container: {
        backgroundColor:'blue',
        flex:1,
        flexDirection:'column'

    },
    banner:{
        backgroundColor: 'grey',
        flex:1
    }

});

export default SignUp;
