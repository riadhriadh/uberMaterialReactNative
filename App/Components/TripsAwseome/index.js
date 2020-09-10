import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TripsAwseom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{
            backgroundColor: "#fafafa", height: "27%", width: "85%", borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            flexDirection: 'column',
            alignItems:'center',
            justifyContent:"center",
            padding:5
           

        }}>
            <View style={{  flex: 1,justifyContent:"center",flexDirection:"column",alignItems:"center",margin:7, }}>
                 <Text style={{fontSize:15,color:"black",}}>How Is Your Trip ?</Text> 
                 </View>
                 <View style={{  flex: 1,justifyContent:"center",flexDirection:'row',flexDirection:'column',alignContent:"center",alignItems:"center"}}>
                 <Text style={{fontSize:10,color:"#bdbdbd",}}>You feadback will help us imporove driving</Text> 
                 <Text style={{fontSize:10,color:"#bdbdbd",}}>exprience batter</Text> 
                 
                 </View>
                 <View style={{  flex: 1,justifyContent:"center",flexDirection:'row', }}>
                 <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                 <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                 <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                 <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                 <Icon name="star" size={30} color="#e0e0e0" style={{margin:2}} />
                
                 
                 
                 </View>
                



        </View>
    );
  }
}
