import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Modal,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA = [
    { id: 1, text: 'zeynep' },
    { id: 2, text: 'kilo:42' },
    { id: 3, text: 'yaş:22' },
    { id: 4, text: 'boy:155cm' },

]
const Profile = () => {
    const [data, setData] = useState(DATA)
    const [isRender, setIsRender] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputText, setInputText] = useState()
    const [editItem, setEditItem] = useState();

    const onPressItem = (item) => {
        setIsModalVisible(true);
        setInputText(item.text);
        setEditItem(item.id)
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        )
    }
    const handleEditItem = (editItem) => {
        const newData = data.map(item => {
            if (item.id == editItem) {
                item.text = inputText;
                return item;
            }
            return item;
        })
        setData(newData);
        setIsRender(!isRender)
    }
    const onPressSaveEdit = () => {
        handleEditItem(editItem);
        setIsModalVisible(false);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    extraData={isRender}
                >
                </FlatList>
                <Modal
                    animationType='fade'
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}>
                    <View style={styles.modalView}>
                        <Text>
                            ChangeText
                        </Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => setInputText(text)}
                            defaultValue={inputText}
                            editable={true}
                            multiline={false}
                            maxLength={200}
                        ></TextInput>
                        <TouchableOpacity
                            onPress={onPressSaveEdit}
                            style={styles.touchableSave}>
                            <Text style={styles.text}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        borderBottomWidth: 10,
        borderBottomColor: 'grey',
        alignItems: 'flex-start'
    },
    text: {
        marginVertical: 30,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10
    },
    textInput: {
        width: '90%',
        height: 70,
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 25
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    touchableSave: {
        backgroundColor: 'orange',
        paddingHorizontal: 100,
        alignItems: 'center',
        marginTop: 20
    }
});
export default Profile;