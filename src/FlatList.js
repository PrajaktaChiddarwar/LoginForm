import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput,Text, FlatList,View,Modal,TouchableOpacity } from 'react-native';
import Login from './Login';
const Data =[
    {
        id:1,
        text: 'Prajakta',
     
    },
    {
        id:2,
        text: 'Gauri'
    },
    {
        id:3,
        text: 'Kush'
    },
    {
        id:4,
        text: 'Nilesh'
    },
];

const Flatlist = () =>
{
    const [data, setdata] = useState(Data);
    const [isRender, setisRender] = useState(false);
    const [isModalVisible, setisModalVisible] = useState(false);
    const [inputText, setinputText] = useState();
    const [editItem, seteditItem] = useState();

    const onPressItem = (item) =>
    {
        setisModalVisible(true);
        setinputText(item.text);
        seteditItem(item.id)
    }
    const renderItem=({item,index}) =>
    {
        return (
            <TouchableOpacity style={styles.item}
            onPress={()=> onPressItem(item)}
            >
            <Text style={styles.text}>{item.text}</Text>

            </TouchableOpacity>
        )
    }
    const handleEditItem =(editItem)=>
    {
        const newData= data.map(item =>{
            if(item.id== editItem)
            {
                item.text=inputText;
                return item;
            }
            return item;
        })
        setdata(newData);
        setisRender(!isRender);
    }

    const onPressSaveEdit = () =>
    {
        handleEditItem(editItem);
        setisModalVisible(false);
    }
   return
    (
        <SafeAreaView  style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item)=>item.id.toString() }
                renderItem={renderItem}
                extraData={isRender}
            />
            <Modal
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={()=>setisModalVisible(false)}>
            <View style={styles.modelView}>
                <Text style={styles.text}>Change Text:</Text>
                <TextInput
                style={styles.textInput}
                onChangeText={(text)=>setinputText(text)}
                defaultValue={inputText}
                editable={true}
                multiline={false}
                maxLength={200}
                />
                <TouchableOpacity
                onPress={()=> onPressSaveEdit()}
                style={styles.touchableSave}
                >
                <Text style={styles.text}>
                    Save
                </Text>

                </TouchableOpacity>
            </View>

            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item:
    {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'flex-start'
    },
    text:
    {
        marginVertical:30,
        fontSize:25,
        fontWeight:'bold',
        marginLeft:10
    },
    textInput:
    {
        width:'90%',
        height: 70,
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 25

    },
    modelView:
    {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',

    },
    touchableSave:
    {
        backgroundColor:'orange',
        paddingHorizontal: 100,
        alignItems: 'center',
        marginTop: 20
    }
});


export default Flatlist;