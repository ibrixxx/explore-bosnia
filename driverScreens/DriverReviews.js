import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ReviewComment from '../components/ReviewComment';

const data = [
    {
        id: 1,
        name: 'Mujo Mujic',
        score: 5,
        comment: 'Dobar pravo svaka mu dala vode iz bokala.',
    },
    {
        id: 2,
        name: 'Mujo Mujic',
        score: 4.5,
        comment: 'Dobar pravo more proc.',
    },
    {
        id: 3,
        name: 'Mujo Mujic',
        score: 1,
        comment: 'Fuj levata.',
    },
]

const DriverReviews = () => {
  return (
    <View style={{height: '100%'}}>
        <FlatList
            data={data}
            keyExtractor={ item => item.id}
            renderItem={({item}) => <ReviewComment {...item}/>}
            ListEmptyComponent={() => <View style={{justifyContent: 'center', marginTop: '50%', alignItems: 'center'}}><Text>This driver has no tour offers</Text></View>}
        />
    </View>
  );
};

export default DriverReviews;
