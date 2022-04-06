import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './views/screens/HomeScreen';
import Profile from './views/screens/Profile';
import TwoScreen from './views/screens/TwoScreen';
import ProgramDetail from './views/screens/ProgramDetail';
import OnBoardScreen from './views/screens/OnBoardScreen';
import SettingScreen from './views/screens/SettingScreen';
import CustomDrawer from './views/screens/CustomDrawer';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from "@native-base/icons";






const Routes = createNativeStackNavigator();
const RoutesNavigator = () => {
  return (
    <Routes.Navigator screenOptions={{ headerShown: false }}>
      <Routes.Screen name="Drawer" component={DrawerNavigator} />
      <Routes.Screen name="TabNavigator" component={TabNavigator} />
      <Routes.Screen name="custom Drawer" component={CustomDrawer} />
      <Routes.Screen name="Settings" component={SettingScreen} />
      <Routes.Screen name="Onboard" component={OnBoardScreen} />
      <Routes.Screen name="OnBoardStack" component={OnBoardStack} />
      <Routes.Screen name="Home1" component={HomeScreen} />
      <Routes.Screen name="Program" component={TwoScreen} />
      <Routes.Screen name="Program Detail" component={ProgramDetail} />
      <Routes.Screen name="Profile" component={Profile} />
    </Routes.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen name="Home" component={HomeTabNavigator} options={{ tabBarIcon: (props) => <Entypo name="home"{...props} size={24} color="black" /> }} />
      <Tab.Screen name="Program" component={ProgramTab} options={{ tabBarIcon: (props) => <AntDesign name="smile-circle"{...props} size={24} color="black" /> }} />
      <Tab.Screen name="ProfileStack" component={ProfileTab} options={{ title: "Profile", headerShown: false, tabBarIcon: (props) => <Ionicons name="person"{...props} size={24} color="black" /> }} />
    </Tab.Navigator>
  )
}

const HomeTabStackNavigator = createNativeStackNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTabStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeTabStackNavigator.Screen name="Kayıt ol" component={HomeScreen} />
    </HomeTabStackNavigator.Navigator>
  )
}

// const Home = createNativeStackNavigator();
// const HomeNavigator = ({ navigation }) => {
//   return (
//     <Home.Navigator screenOptions={{ headerShown: false }}>
//       <Home.Screen name="Kayıt ol" component={HomeScreen} />
//     </Home.Navigator>
//   )
// }



const ProgramTabNavigator = createNativeStackNavigator();
const ProgramTab = (props) => {
  return (
    <ProgramTabNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProgramTabNavigator.Screen name="Program" component={TwoScreen} {...props} />
      <ProgramTabNavigator.Screen name="Program Detail" component={ProgramDetail} {...props} />
    </ProgramTabNavigator.Navigator>
  )
}
const ProfileTabNavigator = createNativeStackNavigator();
const ProfileTab = () => {
  return (
    <ProfileTabNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProfileTabNavigator.Screen name="Profile" component={Profile} />
    </ProfileTabNavigator.Navigator>
  )
}
const OnboardStackNavigator = createNativeStackNavigator();
const OnBoardStack = () => {
  return (
    <OnboardStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <OnboardStackNavigator.Screen name="drawer" component={DrawerNavigator} />
      <OnboardStackNavigator.Screen name="onbord" component={OnBoardScreen} options={{ headerShown: true }} />
    </OnboardStackNavigator.Navigator>
  )
}
const Drawer = createDrawerNavigator();
const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: 'grey',
        drawerActiveTintColor: 'white',
        drawerLabelStyle: { marginLeft: - 25, fontSize: 15 }
      }} drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Anasayfa" component={TabNavigator} options={{
        drawerIcon: () => (
          <Entypo name="home" size={22} color="black" />
        )
      }} />
      <Drawer.Screen name="Ayarlar" component={SettingScreen} options={{
        drawerIcon: () => (
          <Ionicons name="settings" size={22} color="black" />
        )
      }} />

      <Drawer.Screen name="Signout" component={OnBoardStack} options={{
        drawerItemStyle: { position: 'absolute', bottom: 0, width: '90%' },
        drawerIcon: () => (
          <Ionicons name="exit-outline" size={22} color="black" />
        )
      }} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <RoutesNavigator />
    </NavigationContainer>
  )
}
export default App;





// import { CommonActions, NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Text, View, Dimensions } from 'react-native'
// import Profile from './views/screens/Profile';
// import OnBoardScreen from './views/screens/OnBoardScreen';
// import DetailScreen from './views/screens/DetailScreen';
// import HomeScreen from './views/screens/HomeScreen';
// import TwoScreen from './views/screens/TwoScreen';
// import CustomDrawer from './views/screens/CustomDrawer';

// import { StatusBar } from 'expo-status-bar';

// import { Entypo } from "@native-base/icons";
// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
// import { SafeAreaView } from 'react-native-safe-area-context';


// import { DrawerItems } from 'react-navigation';



// const Stack = createNativeStackNavigator();

// const ProfileStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name='OnBoardScreen' component={OnBoardScreen} />
//       <Stack.Screen name='MainScreen' component={Main} />
//       <Stack.Screen name='DetailScreen' component={DetailScreen} />
//     </Stack.Navigator>


//   )
// }

// const HomeStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator options={{ headerShown: false }}>
//       <Stack.Screen name='OnBoardScreen' component={OnBoardScreen} />
//       <Stack.Screen name="MainScreen" component={Main} />
//     </Stack.Navigator>

//   )
// }

// const Tab = createBottomTabNavigator();
// const Main = () => {
//   return (
//     <Tab.Navigator options={{ headerShown: false }}>
//       <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: (props) => <Entypo name="home"{...props} size={24} color="black" /> }} />
//       <Tab.Screen name="Program" component={TwoScreen} options={{ tabBarIcon: (props) => <AntDesign name="smile-circle" size={24} color="black" /> }} />
//       <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: "Profile", headerShown: false, tabBarIcon: (props) => <Ionicons name="person"{...props} size={24} color="black" /> }} />
//     </Tab.Navigator>
//   )
// }

// const Settings = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Ayarlarrr</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const Drawer = createDrawerNavigator();

// const App = () => {

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
//         screenOptions={{
//           headerShown: false,
//           drawerActiveBackgroundColor: 'grey',
//           drawerActiveTintColor: 'white',
//           drawerLabelStyle: { marginLeft: - 25, fontSize: 15 }
//         }} >
//         <Drawer.Screen name="Anasayfa" component={Main} options={{
//           drawerIcon: () => (
//             <Entypo name="home" size={22} color="black" />
//           )
//         }} />
//         <Drawer.Screen name="Settings" component={Settings} options={{
//           drawerIcon: () => (
//             <Ionicons name="settings" size={22} color="black" />
//           )
//         }} />
//         <Drawer.Screen name="Signout" component={HomeStack} options={{
//           drawerItemStyle: { position: 'absolute', bottom: 0, width: '90%' },
//           drawerIcon: () => (
//             <Ionicons name="exit-outline" size={22} color="black" />
//           )
//         }} />
//       </Drawer.Navigator>
//     </NavigationContainer >
//   )
// }

// export const navigationOptions = () => {
//   return {
//     drawerIcon: () => null,
//     drawerLabel: () => null
//   }
// }
// export default App;

