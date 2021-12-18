import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'

const RideOptionsCard = () => {
    const destination = useSelector(selectDestination)

    return (
        <SafeAreaView>
            <Text>{destination?.description}</Text>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
