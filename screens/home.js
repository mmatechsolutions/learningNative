import React from "react"
import { StyleSheet,View,Text } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'wheat',
        padding:45,
    },
    titleText:{
        fontFamily:'nunito-bold',
        fontSize:24
    }
})