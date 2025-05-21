import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About(){
    return(
        <view style={styles.container}>
            <Text>About</Text>
        </view>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'wheat',
        alignItems:'center',
        justifyContent:''
    }
})