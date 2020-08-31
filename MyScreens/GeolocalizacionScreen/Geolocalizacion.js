import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList,StyleSheet, Alert} from 'react-native';
//import Demo1 from './Demo1';

export default class GeolocalizacionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          FlatListItems: [
            { id: '1', value: 'Paul Reinoso' },
            { id: '2', value: 'Nicole ontaneda' },
            { id: '3', value: 'Melanie Garcia' },
            { id: '4', value: 'David Cruz' },
            { id: '5', value: 'Esteban Andaluz' },
            { id: '6', value: 'Francisco Sanchez' },
            { id: '7', value: 'Cristina Alvarado' },
            { id: '8', value: 'Alex Herrera' },
            { id: '9', value: 'Martin Jimenes' },
            { id: '10', value: 'Carlos Rodas' },
            { id: '11', value: 'Karlita Revelo' },
            { id: '12', value: 'Marco Diaz' },
            { id: '13', value: 'Marla Rivera' },
            { id: '14', value: 'Nicolas Cardenas' },
            { id: '15', value: 'Oliver Ver' },
            { id: '16', value: 'Paula Ortiz' },        
          ],
        };
      }

    
     FlatListItemSeparator = () => {
      return (
        //Separador de Item
        <View
          style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
        />
      );
    };
  
    GetItem(item) {
      //Funcion para hacer clic en un elemento
      Alert.alert(item);

    }
  
    render() {
      return (
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.FlatListItems}
            //datos definidos en el constructor
            ItemSeparatorComponent={this.FlatListItemSeparator}
            //Item Separator View
            renderItem={({ item }) => (
              //Single Comes here, que será repetitivo para los elementos FlatList
              <View>
                <Text
                  style={styles.item}
                  onPress={this.GetItem.bind(
                    this,
                    'Id : ' + item.id + ' Value : ' + item.value
                  )}>
                  {item.value}
                </Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    },
  
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });