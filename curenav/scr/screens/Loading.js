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
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';

// IMPORT FILE

const IMAGE_BG= require('../access/images/wallpaper_1.png');
const IMAGE_LOADING_1= require('../access/images/loading_1.png');
//TODO: BEGIN FUNCTION
const Loading =() =>{
    return (
       <View style={styles.container}>
            <View style={styles.banner}>
                <ImageBackground
                    source={IMAGE_BG}
                    style={styles.backgroundImage} >

                    <Image
                        source={IMAGE_LOADING_1}
                        style={styles._images} />

                </ImageBackground>
            </View>
           <View style={styles.content}>

           </View>
           <View style={styles.footer}>

           </View>
        </View>
    );
};


//TODO: BEGIN styles
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    banner: {
        flex:4,
    },
    content: {
        flex:3,
        backgroundColor:'grey'
    },
    footer: {
        flex:2,
        backgroundColor:'#696969'
    },
    backgroundImage:{
        flex:1,
        paddingTop:180,
        paddingLeft:80,
        paddingRight:100

    },
    _images:{
        resizeMode: 'contain',
        flex: 1,
        height: undefined,
        width: undefined
    }

});

export default Loading;
