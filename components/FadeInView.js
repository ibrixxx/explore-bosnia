import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeIn()
    }, [])

    return (
        <Animated.View
            style={[{ ...props.style, opacity: fadeAnim }]}
            useNativeDriver
        >
            {props.children}
        </Animated.View>
    )
}

export default FadeInView
