import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Demo1 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }
  render() {
    return (
        <View >
            <Text>Funciona mierda!!</Text>
        <MapView props={this.props} style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
