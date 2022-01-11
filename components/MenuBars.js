import React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

const MenuBars = ({navigation}) => {
    return (
        <FAB
            style={styles.fab}
            small
            icon="menu"
            onPress={() => navigation.openDrawer()}
        />
    )
}

export default MenuBars


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
