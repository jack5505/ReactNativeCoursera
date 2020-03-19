import React from 'react'
import {View,Text,ActivityIndicator,StyleSheet} from 'react-native'


const style = StyleSheet.create({
    loading:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    loadingText:{
        color:'#512DA8',
        fontSize:14,
        fontWeight:'bold'
    }
})


export const LoadingComponent = () => {
    return(
        <View style={style.loading}>
            <ActivityIndicator size="large"/>
            <Text style={style.loadingText}>Loading...</Text>
        </View>
    )
}