import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar, Caption, Divider, Title } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const DriversItem = () => {
    const navigation = useNavigation()

    return (
        <View style={{
            width: '100%', 
            flex: 1, 
            backgroundColor: 'white', 
            marginTop: '15%', 
            borderRadius: 14, 
            padding: '10%', 
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1, 
            elevation: 14}
        }>
            <TouchableOpacity 
                style={{ justifyContent: 'space-between', alignItems: 'center' }}
                onPress={() => navigation.navigate('HomeStack', {screen: 'Driver', params: {name: 'mo'}})}    
            >
                <Avatar.Icon style={{margin: '5%', backgroundColor: 'black'}} size={88} icon={() => <AntDesign name="user" size={24} color="white" />}/>
                <View style={{justifyContent: 'center'}}>
                    <Title>Name Surname</Title>
                    <Caption>age</Caption>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Text>udaljenost</Text>
                    <Caption>star rating</Caption>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DriversItem
