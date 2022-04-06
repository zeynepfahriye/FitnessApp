import React from "react";
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props) => {

    return (
        <View style={{ flex: 1, flexGrow: 1, height: Dimensions.get('screen').height }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'black' }}>
                <ImageBackground source={require('../../assets/background.png')} style={{ padding: 20 }} >
                    <Image source={require('../../assets/profile.png')} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                    <Text style={{ color: 'white', marginTop: 5, fontSize: 16 }}>Zeynep Çakır</Text>
                    <Text style={{ color: 'white', marginTop: 10, fontSize: 12 }}>Üyelik süresi : 50 gün</Text>
                    <Text style={{ color: 'white', marginTop: 5, fontSize: 12 }}>Kalan Üyelik süresi : 150 gün</Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10, height: Dimensions.get('screen').height - 281 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            {/* <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={backtoFirst} style={{ paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={24} color="black" />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 5,

                            }}
                        >Sign Out</Text>
                    </View>
                    
                </TouchableOpacity>
            </View> */}
        </View>
    )
}
export default CustomDrawer;