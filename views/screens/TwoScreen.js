import React, { useState, useRef } from "react"
import { View, Text, Dimensions, Modal } from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../Button/Button";
import ProgramDetail from "./ProgramDetail";

function TwoScreen() {
    const [data, setData] = useState(programDetails);
    const [programDetails, setProgramDetails] = useState({
        id: "",
        name: "",
        setsayisi: "",
        section: "",
        again: "",
        title: ""
    })

    const program = [
        { name: "Kardiyo", imageUrl: 'https://media.istockphoto.com/photos/embrace-the-power-of-a-bike-picture-id820404152?s=612x612' },
        { name: "Karın Antrenmanı", imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { name: "Kol Antrenmanı", imageUrl: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { name: "Sırt Antrenmanı", imageUrl: 'https://blog.supplementler.com/wp-content/uploads/2017/03/0.jpg' },
        { name: "Bacak Antrenmanı", imageUrl: 'https://media.istockphoto.com/photos/putting-in-the-effort-to-earn-maximum-results-picture-id1168178270?k=20&m=1168178270&s=612x612&w=0&h=5mJAPOP5Ct3Qyc3GjNxsj9ythaNDUb9ugfWiuXpVuYs=' },
        { name: "Esneme", imageUrl: 'https://fitblog.com.tr/wp-content/uploads/2020/08/fitness-man-doing-stretching-gym-600w-507982918.jpg' }
    ]

    const programDetailsx = [
        { id: "1", name: "Kardiyo", setsayisi: "30 dk", section: "Koşu", again: "1 tekrar", title: "Programı başarıyla tamamladınız" },
        { id: "2", name: "Karın Antrenmanı", setsayisi: "3", again: "5 tekrar", section: "Mekik", title: "Programı başarıyla tamamladınız" }
    ]

    const onClickProgram = (item) => {
        if (item)
            setProgramDetails(programDetailsx.filter(a => a.name === item)[0])
        //Navigation.navigate('programDetails', {params: item})
    }

    return (
        <SafeAreaView style={{ width: Dimensions.get('window').width, alignItems: 'center' }} >
            <View >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={program}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<ProgramDetail onClick={onClickProgram} programs={item} />)}
                />
                {
                    <Modal onDismiss={() => setProgramDetails({
                        id: "",
                        name: "",
                        setsayisi: "",
                        section: "",
                        again: "",
                        title: ""
                    })} visible={programDetails.id !== ""} transparent={true} style={{ height: Dimensions.get("screen").height / 2 }}>
                        <View style={{ height: Dimensions.get("screen").height / 2, width: Dimensions.get("screen").width, backgroundColor: "white" }}>
                            <Text style={{ fontSize: 40, color: "black" }}>
                                {programDetails.name}
                                {programDetails.setsayisi}
                                {programDetails.again}
                            </Text>
                            <Button onPress={() => setProgramDetails({ ...programDetails, id: '' })} text={"Kapat"} />
                        </View>
                    </Modal>
                }
            </View>
        </SafeAreaView>

    )
}
export default TwoScreen;