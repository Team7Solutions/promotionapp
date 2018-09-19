import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const SERVER = 'https://team7-server-promotion.herokuapp.com/promotions'

export default class App extends React.Component {

  render() {
    return <MyNavigator />;
  }
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Log in',
  };

  render(){
    return(
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'orange',
      }}>
      <Button
        title="Log in"
        onPress={() =>
          this.props.navigation.navigate('Promotions')
        }
      />
    </View>
    );
  }
    
}

class PromotionScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Promotions',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(SERVER)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("Request: " + SERVER)
      console.log("Response: " + JSON.stringify(responseJson))
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
    })
    .catch((error) =>{
      console.error(error);
    })
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop:20}}>
        <Text>Start FlatList</Text>
        <FlatList
          data={this.state.dataSource.promotions}
          renderItem={({item}) => <Text>{item.name}, {item.value}</Text>}
          keyExtractor={({_id}, index) => _id}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }

}

const MyNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Promotions : PromotionScreen,
  },
  {

  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
