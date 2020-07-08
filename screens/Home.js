import React  from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

function Home({ navigation}) {

  const pressHandler = () =>{
    navigation.navigate('Categories');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/home.jpg')} style={styles.container}>
        <View style={styles.elements}>
           <Text style={styles.firsth}>Welcome </Text>
           <Text style={styles.secondh}>to Our Store </Text>
           <View style={styles.button}>
              <Text onPress={pressHandler} style={styles.textstyle}>Tap to start</Text>
          </View> 
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


  },
  secondh: {
    fontSize: 25,
    position: 'absolute',
    top: 260,
    fontWeight: 'bold'

  }
});
export default Home;
