import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Awesome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                backgroundColor: "#fafafa", height: "38%", width: "95%", borderRadius: 15,
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
               

            }}>
                <View style={{  flex: 1,justifyContent:"space-between",flexDirection:"column",alignItems:"center",margin:7 }}>
                     <Text style={{fontSize:15,color:"black",}}>AWESOME !</Text> 
                     <Text style={{fontSize:10,color:"#bdbdbd",}}>You rated Evan 4 stars</Text> 
                     
                     
                     </View>
                     <View style={{  flex: 1,justifyContent:"center",flexDirection:'row', }}>
                     <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                     <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                     <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                     <Icon name="star" size={30} color="#ffca28" style={{margin:2}} />
                     <Icon name="star" size={30} color="#e0e0e0" style={{margin:2}} />
                    
                     
                     
                     </View>
                     <View style={{flex: 1,padding:6,height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                     <View style={{flex: 1,backgroundColor:'#eeeeee',width:"100%",marginBottom:10,borderRadius:7,justifyContent:"center",alignItems:"center"}}>
                     <Text>About Event Serivce </Text> 
                    
                     
                     
                     </View> 
                    
                     
                     
                     </View>



            </View>
        );
    }
}
