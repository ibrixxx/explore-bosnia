import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import DriversItem from '../components/DriversItem'

const data = [{
        id: 1,
        name: 'boasd',
    },
    {
        id: 2,
        name: 'boasd',
    },
    {
        id: 3,
        name: 'boasd',
    }
]


const DriversScreen = () => {
    return (
        <SafeAreaView> 
            <FlatList 
                keyExtractor={item => item.id}
                data={data}
                renderItem={({item}) => <DriversItem />}
            />
        </SafeAreaView>
        )
}
export default DriversScreen