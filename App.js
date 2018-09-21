import React from 'react';
import { SafeAreaView, View, ScrollView, Button } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import Feed from './src/screens/Feed'
import Login from './src/screens/Login'
import Loading from './src/screens/Loading'
import SingUp from './src/screens/SingUp';

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView>
            <DrawerItems {...props} />
        </SafeAreaView>
        <View><Button title="Logout" onPress={() => props.navigation.navigate('Auth')} color="#841584" /></View>
    </ScrollView>
);

const AppStack = createDrawerNavigator(
    {
        Home: Feed
    }, 
    {
        contentComponent: CustomDrawerContentComponent
    }
);
const AuthStack = createStackNavigator({
    SingIn: Login,
    SingUp: SingUp
});

const MyNavigator = createSwitchNavigator(
    {
        Loading: Loading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Loading',
    }
);

export default class App extends React.Component {

    render() {
        return <MyNavigator />;
    }
}