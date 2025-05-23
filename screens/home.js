import React, {useState} from "react"
import { StyleSheet,View,Text , FlatList, TouchableOpacity, Modal} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({navigation}){
    const[modalOpen, setModalOpen]=useState(false);

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

            <Modal visible={modalOpen} animationType="slide" >
                <View style={styles.modalContent}>
                    <MaterialIcons 
                    name="close"
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=>setModalOpen(false)}
                    />
                    <Text>Modal Content</Text>
                </View>
            </Modal>
            <MaterialIcons 
                    name="add"
                    size={24}
                    style={styles.modalToggle}
                    onPress={()=>setModalOpen(true)}
                    />
            <FlatList 
            data={reviews}
            renderItem={({item})=>(
                // passing data through
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                    <Card>
                        <Text >{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles =StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'flex-end'
    },
    modalClose:{
        marginTop:8,
        marginBottom:0
    },
    modalContent:{
        flex:1,
        backgroundColor:'#DDFEF8'

    }
})