import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, AsyncStorage } from 'react-native';

const width = Dimensions.get('screen').width
export default class Login extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor() {
        super();
        this.state = {
            user: '',
            password: '',
            message: ''
        }
    }

    login() {
        this.props.navigation.navigate('App')
        /*const uri = "http://"

        const requestInfo = {
            method: 'Post',
            body: JSON.stringify({
                user: this.state.user,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-type' : 'application/json'
            })
        }

        //TODO: fetch to api
        /** /
        fetch(uri, requestInfo)
            .then(response => {
                if(response.ok){
                    return response.text();
                }

                throw new Error("Não foi possivel efetual login")
            })
            .then( token => {
                AsyncStorage.setItem('token', token)
                AsyncStorage.setItem('user', this.state.user)
            })
            .catch(e => this.setState({message: e.message}))
        /**/
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    PromotionAPP
                </Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="User..." onChangeText={text => this.setState({ user: text })}
                        underlineColorAndroid='transparent' autoCapitalize='none' />

                    <TextInput style={styles.input}
                        placeholder="Password..." onChangeText={text => this.setState({ password: text })}
                        underlineColorAndroid='transparent' secureTextEntry={true} />
                </View>
                <View style={styles.button}>
                    <Button title="Login" onPress={this.login.bind(this)} />
                    <Button title="Sing Up" onPress={() => this.props.navigation.navigate('SingUp')} color="#841584"/>
                </View>
                <Text style={styles.messages}>
                    {this.state.message}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26
    },
    form: {
        width: width * 0.8,
        marginBottom: 10
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    button: {
        width: width * 0.8,
        justifyContent: 'space-between',
        height: 75
    },
    messages: {
        marginTop: 15,
        color: '#e74c3c'
    }
})

