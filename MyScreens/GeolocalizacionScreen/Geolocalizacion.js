import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import Demo1 from './Demo1';
/*
export default function GeolocalizacionScreen(props) {    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Ubicacion del paciente</Text>
  
    </View>
      );
  }
  */
export default class GeolocalizacionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
//solo obtiene la posicion del usuario
/*
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            function(position) {
              console.log(position);
            },
            function(error) {
              console.error("Error Code = " + error.code + " - " + error.message);
            }
          );
      }
      */
    render() {
        return (
          
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Ubicacion del paciente</Text>
          
        </View>
    );

    }
}
