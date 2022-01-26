import { View, Text } from 'react-native';
import React from 'react';
import { Avatar, Caption, Divider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { Rating } from 'react-native-ratings';


const ReviewComment = (props) => {
  return (
    <View style={{flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', width: '100%'}}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'column'}}>
            <Avatar.Icon style={{margin: '5%', backgroundColor: 'black'}} size={44} icon={() => <AntDesign name="user" size={24} color="white" />}/>
            <Caption>{props.name}</Caption>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start', flexDirection: 'column'}}>
            <Rating imageSize={19} readonly={true} startingValue={props.score} tintColor='white' style={{marginTop: 5}}/>
            <Text style={{fontWeight: 'bold'}}>{props.comment}</Text>
        </View>
        <Divider style={{height: 0.5, backgroundColor: 'black'}}/>
    </View>
  );
};

export default ReviewComment;
