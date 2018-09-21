import React from 'react';
import { FlatList, StyleSheet, View, Platform } from 'react-native';
import { Header, Left, Body, Right, Icon } from 'native-base'
import Promotion from '../components/Promotion'

const SERVER = 'https://team7-server-promotion.herokuapp.com/promotions'


export default class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        return fetch(SERVER)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log("Response: " + JSON.stringify(responseJson))
                this.setState({ data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {

        return (
            <View style={styles.container}>
                <Header transparent>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left><Body /><Right />
                </Header>
                <FlatList
                    data={this.state.data.promotions}
                    keyExtractor={({ _id }, index) => _id}
                    renderItem={({ item }) =>
                        <Promotion promotion={item} />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
