import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { SafeAreaView, ActivityIndicator } from 'react-native'
import WebView from 'react-native-webview';
import MenuBars from '../components/MenuBars';

const OrderFoodScreen = () => {
    const [firstRender, setFirstRender] = useState(true);
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{height: '100%'}}>
            <MenuBars navigation={navigation}/>
            <WebView
                onLoadEnd={() => setFirstRender(false)}
                source={{uri: 'https://korpa.ba/'}}
            />
            {firstRender && (<ActivityIndicator size={60} color={'dodgerblue'} style={{position: 'absolute',left: 0,right: 0,bottom: 0,top: 0}}/>)}
        </SafeAreaView>    
    )
}

export default OrderFoodScreen
