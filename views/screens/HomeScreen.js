import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Alert } from 'react-native';
import Input from "../input/Input";
import Button from "../Button/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
    const [userFullName, setUserFullName] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userHeight, setUserHeight] = useState(null);
    const [userWeight, setUserWeight] = useState(null);

    function handleSubmit() {
        if (!userFullName || !userMail || !userAge || !userHeight || !userWeight) {
            Alert.alert('Fit Health', 'Tüm alanları doldurunuz');
            return;
        }
        const user = {
            userFullName,
            userMail,
            userAge,
            userHeight,
            userWeight,
        };
        navigation.navigate('RoutsNavigator', { user });
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.header2}>Sign Up</Text>
                <Input label="İsim Soyisim" placeholder="İsminizi ve Soyisminizi Giriniz:" onChangeText={setUserFullName} />
                <Input label=" Mail" placeholder="Mail adresinizi Giriniz:" onChangeText={setUserMail} />
                <Input label=" Yaş" placeholder="Yaşınızı Giriniz:" onChangeText={setUserAge} />
                <Input label=" Boy" placeholder="Boyunuzu Giriniz:" onChangeText={setUserHeight} />
                <Input label=" Kilo" placeholder="Kilonuzu Giriniz:" onChangeText={setUserWeight} />
                <Button text="KAYIT OL" onPress={handleSubmit} />

                <StatusBar style="auto"></StatusBar>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({

    header2: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
    }
})