import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class Discord extends React.Component {

    link = ()=>{
        WebBrowser.openBrowserAsync('https://discord.com/login')
    }

    render(){
        return(
            <View  style = {styles.view}>
                <TouchableOpacity onPress = {this.link()}>

                  <Image source = {{ uri: 'https://www.slashgear.com/wp-content/uploads/2017/08/discord_main.jpg'}}
                  style = {styles.image}/>

                  <Text style = {styles.text}>Discord</Text>

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

    text: {
        fontSize: 20,
    },

    image: {
        width: 250,
        height: 250
    }

})