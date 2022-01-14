import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar, Caption, Divider, Title } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 

const DriversItem = () => {
    return (
        <View style={{width: '100%', flex: 1, backgroundColor: 'yellow'}}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Avatar.Icon style={{margin: '5%', backgroundColor: 'black'}} size={40} icon={() => <AntDesign name="user" size={24} color="white" />}/>
                <View style={{justifyContent: 'center'}}>
                    <Title>Name Surname</Title>
                    <Caption>age</Caption>
                </View>
                <View style={{justifyContent: 'center', marginRight: '5%'}}>
                    <Text>udaljenost</Text>
                    <Caption>star rating</Caption>
                </View>
            </TouchableOpacity>
            <Divider style={{width: '100%', height: 0.5, backgroundColor: 'gray'}} />
        </View>
    )
}

export default DriversItem
