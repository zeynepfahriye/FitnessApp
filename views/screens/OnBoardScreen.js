import { View, Image, StyleSheet, Text, Pressable, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from 'react-native-safe-area-context';


function OnBoardScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar translucent backgroundColor='white' />
                    <Image source={require('../../assets/spor4.png')} style={styles.image} />
                    <View style={styles.indicatorContainer}>
                        <View style={styles.indicator} />
                        <View style={styles.indicator} />
                        <View style={[styles.indicator, styles.indicatorActive]} />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={styles.title}>Fit Health</Text>
                    </View>
                    <View style={{ marginTop: 10, flex: 1 }}>
                        <Text style={styles.textstyle}> Üye Ol </Text>
                        <Text style={styles.textstyle}> Profilini Oluştur</Text>
                        <Text style={styles.textstyle}> Harekete Geç</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
                        <Pressable onPress={() => { navigation.navigate('Home1') }} style={{ marginTop: 10 }}>
                            <View style={styles.btn}>
                                <Text style={{ color: 'white' }}>Kayıt Ol</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        height: 410,
        width: '100%',
        borderBottomRightRadius: 65,
        borderBottomLeftRadius: 65
    },
    indicatorContainer: {
        flex: 1,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: 'grey',
        opacity: 0.4,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: 'black',
        opacity: 0.8,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    },
    textstyle: {
        fontSize: 16,
        color: 'grey',
        justifyContent: 'center',
        textAlign: 'center'
    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: 'black',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
export default OnBoardScreen;