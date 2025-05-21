import React from "react"
import { StyleSheet,View,Text } from "react-native";


export default function reviewDetails(){
    return(
        <view style={styles.container}>
            <Text>Review Details</Text>
        </view>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'wheat',
        alignItems:'center',
        justifyContent:'center'
    }
})