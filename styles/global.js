import { StyleSheet } from "react-native";
 


export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'wheat',
        padding:20,
    },
    titleText:{
        fontFamily:'nunito-bold',
        fontSize:24,
        color:'smokewhite',
        padding:10,
        borderBottomWidth:1
    },
    input:{
        borderWidth:1,
        borderColor: '#6ec6cb',
        padding:10,
        fontSize:18,
        borderRadius:6,
        marginBottom:12
    },
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:'10',
        fontSize:12,
        textAlign: 'center',
    }
})

export const images = {
    ratings:{
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}