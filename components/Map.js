import { GOOGLE_MAPS_API_KEY } from '@env';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectDestination, selectOrigin } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null) 

    useEffect(() => {
        //console.log('kk ', destination, origin)
        if(!origin || !destination)
            return
        setTimeout(() => mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], 
        {
            edgePadding: {top: 69, right: 69, bottom: 69, left: 69},
        }), 500)    
    }, [destination, origin])
    
 
    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType={'mutedStandard'}
            initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.0051,
            longitudeDelta: 0.0051,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
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
