import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class Reddit extends React.Component {

    link = ()=>{
        WebBrowser.openBrowserAsync('https://www.reddit.com')
    }

    render(){
        return(
            <View style = {styles.view}>
                <TouchableOpacity onPress = {this.link()}>
                 
                  <Image source = {{ uri: 'https://www.redditinc.com/assets/images/site/reddit-logo.png'}}
                  style = {styles.image}/>

                  <Text style = {styles.text}>Reddit</Text>

                </TouchableOpacity>
            </View>
        )
    };

}

const styles = StyleSheet.create({

    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    image: {
        width: 200,
        height: 200,
    },

    text: {
        marginTop: 20,
        fontSize: 20
    }

})