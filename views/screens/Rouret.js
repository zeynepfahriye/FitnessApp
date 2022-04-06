// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from './HomeScreen';
// import Profile from './Profile';
// import TwoScreen from './TwoScreen';
// import ProgramDetail from './ProgramDetail';
// import OnBoardScreen from './OnBoardScreen';
// import Settings from './Settings';

// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from "@native-base/icons";


// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ProgramDetail from './ProgramDetail';


// const Routes = createNativeStackNavigator();
// const RoutesNavigator = () => {
//     <RoutesNavigator.Navigator>
//         <Routes.Screen name="tabNavigator" component={TabNavigator} />
//         <Routes.Screen name="Settings" component={Settings} />
//         <Routes.Screen name="Onboard" component={OnBoardScreen} />
//         <Routes.Screen name="Home" component={HomeScreen} />
//         <Routes.Screen name="Program" component={TwoScreen} />
//         <Routes.Screen name="Program Detail" component={ProgramDetail} />
//         <Routes.Screen name="Profile" component={Profile} />
//     </RoutesNavigator.Navigator>
// }

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={homeTabNavigator} options={{ tabBarIcon: (props) => <Entypo name="home"{...props} size={24} color="black" /> }} />
//             <Tab.Screen name="Program" component={programTabNavigator} options={{ tabBarIcon: (props) => <AntDesign name="smile-circle" size={24} color="black" /> }} />
//             <Tab.Screen name="ProfileStack" component={profileTabNavigator} options={{ title: "Profile", headerShown: false, tabBarIcon: (props) => <Ionicons name="person"{...props} size={24} color="black" /> }} />
//         </Tab.Navigator>
//     )
// }

// const HomeTabStackNavigator = createNativeStackNavigator();

// const homeTabNavigator = () => {
//     return (
//         <HomeTabStackNavigator.Navigator>
//             <HomeTabStackNavigator.Screen name="Kayıt ol" component={HomeScreen} />
//         </HomeTabStackNavigator.Navigator>
//     )
// }
// const ProgramTabNavigator = createNativeStackNavigator();
// const programTabNavigator = () => {
//     return (
//         <ProgramTabNavigator.Navigator>
//             <ProgramTabNavigator.Screen name="Program Detail" component={ProgramDetail} />
//         </ProgramTabNavigator.Navigator>
//     )
// }
// const ProfileTabNavigator = createNativeStackNavigator();
// const profileTabNavigator = () => {
//     return (
//         <ProfileTabNavigator.Navigator>
//             <ProfileTabNavigator.Screen name="Profile" component={Profile} />
//         </ProfileTabNavigator.Navigator>
//     )
// }
// const OnboardStack = createNativeStackNavigator();
// const onBoardStack = () => {
//     return (
//         <OnboardStack.Navigator>
//             <onBoardStack.Screen name="onboard" component={OnBoardScreen} />
//         </OnboardStack.Navigator>
//     )
// }
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//     <Drawer.Navigator>
//         <DrawerNavigator.Screen name="homeDrawer" component={homeDrawer} />
//     </Drawer.Navigator>
// }
// const homeDrawer = () => {
//     return (
//         <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
//             screenOptions={{
//                 headerShown: false,
//                 drawerActiveBackgroundColor: 'grey',
//                 drawerActiveTintColor: 'white',
//                 drawerLabelStyle: { marginLeft: - 25, fontSize: 15 }
//             }} >
//             <Drawer.Screen name="Anasayfa" component={TabNavigator} options={{
//                 drawerIcon: () => (
//                     <Entypo name="home" size={22} color="black" />
//                 )
//             }} />
//             <Drawer.Screen name="Ayarlar" component={Settings} options={{
//                 drawerIcon: () => (
//                     <Ionicons name="settings" size={22} color="black" />
//                 )
//             }} />
//             <Drawer.Screen name="Signout" component={onBoardStack} options={{
//                 drawerItemStyle: { position: 'absolute', bottom: 0, width: '90%' },
//                 drawerIcon: () => (
//                     <Ionicons name="exit-outline" size={22} color="black" />
//                 )
//             }} />
//         </Drawer.Navigator>
//     )
// }
// const Router = () => {
//     return (
//         <NavigationContainer>
//             <TabNavigator />
//             <DrawerNavigator />
//         </NavigationContainer>
//     )
// }
// export default Router;