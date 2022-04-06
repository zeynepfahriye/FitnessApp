import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';



const ProgramDetail = (props) => {
    console.log(props)
    const { name, imageUrl } = props?.programs
    const { onClick } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ padding: 10 }} onPress={() => onClick(name)} >
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    )


}
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,


    },
    text: {
        marginTop: 10,
        marginBottom: 10,
    }
})
export default ProgramDetail;