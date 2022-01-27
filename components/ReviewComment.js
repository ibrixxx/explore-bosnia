import { View, Text } from 'react-native';
import React from 'react';
import { Avatar, Caption, Divider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { Rating } from 'react-native-ratings';


const ReviewComment = (props) => {
  return (
    <View>
      <View style={{flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', width: '100%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginRight: '2%'}}>
              <Avatar.Icon style={{margin: '5%', backgroundColor: 'black'}} size={44} icon={() => <AntDesign name="user" size={24} color="white" />}/>
              <Caption>{props.name}</Caption>
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Rating imageSize={19} readonly={true} startingValue={props.score} tintColor='#f2f5f5' style={{marginTop: 5}}/>
              <Text style={{fontWeight: 'bold', marginTop: '5%'}}>{props.comment}</Text>
          </View>
      </View>
      <Divider style={{backgroundColor: 'black', width: '100%'}} />
    </View>
  );
};

export default ReviewComment;
