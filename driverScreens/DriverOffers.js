import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import DriverTourOffer from '../components/DriverTourOffer';

const data = [
    {
        id: 1,
        driverId: 69,
        title: 'Sarajevo Tour',
        description: 'Full Sarajevo experinece tour with one of the most experienced local drivers, family stuff, se lots of things lets go',
        durration: '3 weeks',
        price: '1699.99 $',
        image: 'https://www.raftingtara.com/files/images/ponude/sarajevo-bg.jpg'
    },
    {
        id: 2,
        driverId: 69,
        title: 'Bosnia Tour',
        description: 'Full Bosnia experinece tour with one of the most experienced local drivers, family stuff, se lots of things lets go',
        durration: '5 weeks',
        price: '2500.00 $',
        image: 'https://funkytours.com/wp-content/uploads/2019/04/Jajce-Waterfalls-and-Medieval-Fort.jpg'
    },
    {
        id: 3,
        driverId: 69,
        title: 'Mostar Tour',
        description: 'Full Mostar experinece tour with one of the most experienced local drivers, family stuff, se lots of things lets go',
        durration: '3 weeks',
        price: '599.99 $',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Mostar_Old_Town_Panorama_2007.jpg'
    },
]

const DriverOffers = () => {
  return (
    <View style={{height: '100%'}}>
        <FlatList
            style={{padding: '6%'}} 
            data={data}
            keyExtractor={ item => item.id}
            renderItem={({item}) => <DriverTourOffer {...item}/>}
            ListEmptyComponent={() => <View style={{justifyContent: 'center', marginTop: '50%', alignItems: 'center'}}><Text>This driver has no tour offers</Text></View>}
        />
    </View>
  );
};

export default DriverOffers;
