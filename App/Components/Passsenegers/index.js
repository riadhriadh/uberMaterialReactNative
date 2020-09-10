import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Passengers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                backgroundColor: "#fafafa", height: "45%", width: "95%", borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: 'column',

                justifyContent: "center",
             


            }}>
                <View style={{ flex: 1, justifyContent: "center", flexDirection: "column", margin: 7 }}>
                    <Text style={{ fontSize: 15, color: "black", }}>PASSENGERS</Text>

                </View>
                <View style={{ flex: 2, justifyContent: "center", flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", flex: 2 }}>
                            <Image
                                style={{ height: 40, width: 40, borderRadius: 50 }}
                                source={{
                                    uri: 'https://images.immediate.co.uk/production/volatile/sites/3/2019/12/YOU_201_Unit_01100R-f7bdba3-scaled.jpg?quality=90&resize=620%2C413',
                                }}></Image>
                            <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: "bold" }}> You</Text>

                        </View>
                        <View>
                            <Text style={{ color: "#bdbdbd" }}> 2 Passengers</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", flex: 2, }}>
                            <Image
                                style={{ height: 40, width: 40, borderRadius: 50 }}
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5v4aFkNdoEckvgb6cOo98neyjxtdnUEACsA&usqp=CAU',
                                }}></Image>
                            <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: "bold" }}> Selona</Text>

                        </View>
                        <View>
                            <Text style={{ color: "#bdbdbd" }}> 1 Passengers</Text>
                        </View>
                    </View>







                </View>
                <View style={{ flex: 1, marginVertical: 6, height: "100%", width: "100%", justifyContent: "center", alignItems: "center",marginHorizontal: 10 }}>
                    <View style={{ flex: 1, marginBottom: 2, borderRadius: 7, alignItems: "center", flexDirection: "row" }}>
                     <View>
                        <Icon name="info-circle" size={30} color="#e0e0e0"  />
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1,}}>
                            <Text style={{  fontSize: 11, color: "#8d8d8d",marginLeft:10 }}>You're sharing your ridg with others going your way Other passengers maybe addiedt </Text>

                        </View>

                    </View>



                </View>



            </View>
        );
    }
}
