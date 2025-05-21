import React,{useState} from "react";
import { StyleSheet, View, Text, FlatList,TouchableOpacity } from "react-native";
// import {globalStyles} from '../styles/global';

export default function Home({navigation}) {

   const [reviews, setReviews] = useState([
    { title: 'Great product', rating: 5, body: 'I loved it!', key: '1' },
    { title: 'Not bad', rating: 3, body: 'It was okay, could be better.', key: '2' },
    { title: 'Terrible experience', rating: 1, body: 'Would not recommend.', key: '3' },
  ]);

    return (
        <View style={styles.container}>
            <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress= {()=> navigation.navigate('ReviewDetails',item)}>
                    <Text > {item.title} </Text>
                </TouchableOpacity>

            )}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:44,
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize:18
    }
});