import { GOOGLE_MAPS_API_KEY } from '@env';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector, useDispatch } from 'react-redux';
import tw from 'twrnc';
import { selectDestination, selectOrigin, setExpectedTime } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null) 
    const dispatch = useDispatch();

    useEffect(() => {
        if(!origin || !destination)
            return
        setTimeout(() => mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], 
        {
            edgePadding: {top: 69, right: 69, bottom: 69, left: 69},
        }), 500)    
    }, [destination, origin])

    useEffect(() => {
        if(!origin || !destination)
            return

        const getTravelTime = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.location.lat},${origin.location.lng}&destinations=${destination.location.lat},${destination.location.lng}&key=${GOOGLE_MAPS_API_KEY}`
            fetch(URL).then(res => res.json()).then(data => dispatch(setExpectedTime(data.rows[0].elements[0])))
        }

        getTravelTime()
    }, [origin, destination, GOOGLE_MAPS_API_KEY])
    
 
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
                    origin={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    destination={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
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
