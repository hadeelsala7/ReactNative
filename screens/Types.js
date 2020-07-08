import React  from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
function Types() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/home.jpg')} style={styles.container}>
        <View style={styles.elements}>
           <Text style={styles.firsth}>Welcome </Text>
        </View>
     </ImageBackground>
    </View> 
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    
  },
  elements:{
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    width: '70%', 
    height: 50, 
    backgroundColor: '#800080', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: -400,
    borderRadius: 15

  },
  textstyle:{
    color: '#fff',
    fontSize:22,

  },
  firsth:{
    fontSize: 50,
    position: 'absolute',
    top: 200,
    fontWeight: 'bold'


  }
});
export default Types;