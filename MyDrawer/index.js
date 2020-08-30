// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GeolocalizacionScreen from '../MyScreens/GeolocalizacionScreen/Geolocalizacion';
//import Demo1 from '../MyScreens/GeolocalizacionScreen/Demo1 ';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Sistema Covid</Text>
      <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: '#84EB3D', padding: 10, alignItems: 'center', borderRadius: 5 }}
        onPress={() => props.navigation.navigate('Perfil')}>
        <Text style={{ color: '#060606', fontSize: 20 }}>Paciente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: '#84EB3D', padding: 10, alignItems: 'center', borderRadius: 5 }}
        onPress={() => props.navigation.navigate('Administrador')}>
        <Text style={{ color: '#060606', fontSize: 20 }}>Administrador</Text>
      </TouchableOpacity>
    </View>
  );
}
function UsuarioScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Menu Usuario</Text>
    </View>
  );
}
function AdministradorScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Menu Administrador</Text>
    <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: '#84EB3D', padding: 10, alignItems: 'center', borderRadius: 5 }}
    onPress={() => props.navigation.navigate('Geolocalizacion')}>
      <Text style={{ color: '#060606', fontSize: 20 }}>Localizar paciente</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ marginTop: 20, width: 300, height: 50, backgroundColor: '#84EB3D', padding: 10, alignItems: 'center', borderRadius: 5 }}
    >
    <Text style={{ color: '#060606', fontSize: 20 }}>Localizar todos los pacientes</Text>
  </TouchableOpacity>
  </View>
    );
}

const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={UsuarioScreen} />
        <Stack.Screen name="Administrador" component={AdministradorScreen} />
        <Stack.Screen name="Geolocalizacion" component={GeolocalizacionScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;