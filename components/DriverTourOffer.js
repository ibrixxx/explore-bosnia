import { View, Text, Image } from 'react-native';
import React from 'react';
import { Button, Caption, Paragraph, Title } from 'react-native-paper';

const DriverTourOffer = (props) => {
  return (
    <View 
        style={{
        borderWidth: 5, 
        borderRadius: 15, 
        borderColor: 'dodgerblue', 
        backgroundColor: 'royalblue', 
        flex: 5, 
        alignItems: 'center',
        marginBottom: '10%', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 14, 
    }}
    >
        <Title style={{fontWeight: 'bold', fontStyle: 'italic', color: 'white'}}>{props.title}</Title>
        <Text style={{color: 'lightgray', padding: '2%'}}>Durration: {props.durration}</Text>
        <View style={{width: '100%', height: 200, marginVertical: '5%'}}>
            <Image source={{uri: props.image}} style={{width: '100%', height: '100%'}}/>
        </View>
        <Caption style={{color: 'lightgray', padding: '2%'}}>{props.description}</Caption>
        <Button style={{backgroundColor: 'dodgerblue', width: '100%', marginTop: '4%'}} color='white' onPress={() => console.log('borz')}>Buy for {props.price}</Button>
    </View>
  );
};

export default DriverTourOffer;
