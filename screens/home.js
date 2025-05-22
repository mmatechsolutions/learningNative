import React, {useState} from "react"
import { StyleSheet,View,Text , FlatList, TouchableOpacity} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        {
            title: 'Zelda: Breath of the Wild',
            rating: 5,
            body: 'An open-world masterpiece with incredible freedom and adventure.',
            key: '1',
        },
        {
            title: 'God of War: Ragnarok',
            rating: 4,
            body: 'Great story and action-packed gameplay. A worthy sequel.',
            key: '2',
        },
        {
            title: 'Elden Ring',
            rating: 5,
            body: 'Challenging, vast, and rewarding. A true evolution of Souls games.',
            key: '3',
        },
  {
    title: 'Hollow Knight',
    rating: 4,
    body: 'Beautifully crafted metroidvania with deep lore and tight controls.',
    key: '4',
  },
]);

    return(
        <View style={globalStyles.container}>
            <FlatList 
            data={reviews}
            renderItem={({item})=>(
                // passing data through
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}
