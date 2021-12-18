import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useUser } from '../authProvider/AuthProvider';

const Map = () => {
    const user = useUser()
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null) 

    useEffect(() => {
        console.log('kk ', user.destination, user.origin)
        if(!origin || !destination)
            return
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], 
        {
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        })
    }, [origin, destination])
    

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType={'mutedStandard'}
            initialRegion={{
            latitude: user.origin.location.lat,
            longitude: user.origin.location.lng,
            latitudeDelta: 0.0051,
            longitudeDelta: 0.0051,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={'Barcelona, Spain'}
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeColor={'dodgerblue'}
                    strokeWidth={6}
                    lineDashPattern={[1]}
                />
            )}

            {origin?.location && 
                <Marker 
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title={'Start'}
                    description={origin.description}
                    identifier={'origin'}
                />
            }
            
            {destination?.location && 
                <Marker 
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title={'End'}
                    description={destination.description}
                    identifier={'destination'}
                />
            }

        </MapView>
    )
}

export default Map
