import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import BottomSheet from '@gorhom/bottom-sheet';

const Stack = createStackNavigator();

const MapScreen = () => {
    const navigation = useNavigation()

    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['10%', '100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <View>          
            <SafeAreaView>
                
                <FAB
                    style={styles.fab}
                    small
                    icon="menu"
                    onPress={() => navigation.goBack()}
                />

                <View style={tw`h-1/2`}>
                    <Map />
                </View>

                <View style={tw`h-1/2`}>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <Stack.Navigator>
                        <Stack.Screen 
                            name='NavigateCard'
                            component={NavigateCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen 
                            name='RideOptionsCard'
                            component={RideOptionsCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </BottomSheet>
                </View>

                {/* <View style={tw`h-1/2`}>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name='NavigateCard'
                            component={NavigateCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen 
                            name='RideOptionsCard'
                            component={RideOptionsCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </View> */}
            </SafeAreaView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      left: 0,
      top: 20,
      backgroundColor: 'white',
      zIndex: 100,
    },
  })