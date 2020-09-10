import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{
            backgroundColor: "#fafafa", height: "15%", width: "95%", borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:"center",
            paddingVertical:7
           

        }}>
            <View style={{  flex: 1,justifyContent:"center",alignItems:"center",margin:7,alignItems:"center" }}>
                <Image 
                style={{height:40,width:40}}
                source={{
          uri: 'https://www.sunlife.co.id/content/dam/sunlife/legacy/assets/id/About%20Us/Client%20Support/OG%20Images_L3%20About%20Us_Client%20Support.jpg',
        }}></Image>
                
                 
                 
                 </View>
                 <View style={{  flex: 1,justifyContent:"center",flexDirection:'column', }}>
                     <View style={{flex:1}}>
                     <Text style={{color:"black",fontSize:12}}>Evan Quzman</Text>
                     </View>
                     <View style={{flex:1,flexDirection:"row",alignItems:'center'}}>
                     <Icon name="star" size={12} color="#ffca28" style={{margin:2}} />
                     <Text>4.6</Text>


</View>

<View style={{flex:1,flexDirection:"row",alignItems:'center'}}>
<Icon name="map-marker" size={12} color="#e0e0e0" style={{margin:2}} />
<Text style={{fontSize:10}}> 3 mins</Text>
</View>
                
              
                
                 
                 
                 </View>
                 <View style={{flex: 1,padding:6,height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                 <View style={{flex: 1,width:"100%",marginBottom:10,borderRadius:7,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                 <Image 
              
                source={require('../../assets/img/berline-eco.png')}
                ></Image>
                <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",margin:3,}}>
                    <Text style={{fontSize:10,color:"#bdbdbd"}}>ToyoutaVios-</Text>
                    <Text style={{fontSize:10}}>8CF4829</Text>
                </View>
                
                 
                 
                 </View> 
                
                 
                 
                 </View>



        </View>
    );
  }
}
