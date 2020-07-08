import React ,{Component} from 'react';
import axios from 'react-native-axios';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
class Types extends Component {

  state = {
    types: [],
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/users`)
      .then(res => {
        this.setState( {types: res.data}
        );
        
      })
  }
  render(){
    console.log(this.state.types);
    return (
      <View style={styles.container}>
          <View style={styles.elements}>
            {this.state.types.map(user =>{
                return(
                  <Text style={styles.textstyle} key={user.id}>{user.name}</Text>
              )
        })} 
          </View>
      </View> 
    );
  }
  }

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#9932CC'

    
  },
  elements:{
   display: "flex",
   flexWrap: "wrap",
   margin:10,
   justifyContent:"center",
   flexDirection: 'row',

  },
  textstyle:{
    fontSize:12,
    backgroundColor: "white",
    color: 'black',
    fontWeight: 900,
    textAlign: "center",
    width:150,
    height: 40,
    margin:10,
    borderRadius: 15,
    padding:10,

  }
});
export default Types;