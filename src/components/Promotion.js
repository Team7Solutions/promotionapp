import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width
export default class Promotions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      promotion: this.props.promotion
    }
  }

  render() {
    const { promotion }  = this.state;

    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.name}>{promotion.name}</Text>
        </View>
        <Image source={{ uri: promotion.thumb }} style={styles.picture} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    borderLeftWidth: 5,
    borderColor: 'green',
    flexDirection: 'row', 
    alignItems: 'center'
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  picture: {
    width: width,
    height: width
  }
});
