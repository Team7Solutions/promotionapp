import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

const width = Dimensions.get('screen').width
export default class SingUp extends React.Component {

    static navigationOptions = {
        //header: null
    }

    singUp() {
        this.props.navigation.goBack()    
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    SingUp
                </Text>
                <Text>TODO Criar Tela</Text>
                <View style={styles.button}>
                    <Button title="Sing Up" onPress={this.singUp.bind(this)} color="#841584"/>
                </View>
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
    button: {
        width: width * 0.8,
    },
})

