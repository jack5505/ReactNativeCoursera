import React,{Component} from 'react'
import {DISHES} from '../shared/dishes'
import Menu from './MenuComponent';
import {View,Platform} from 'react-native'
import DishDetail from "./DishdetailComponent";
import { createStackNavigator }  from 'react-navigation'
import * as Expo from "react-native";

const MenuNavigator = createStackNavigator({
    Menu:{screen: Menu},
    DishDetail:{screen: DishDetail}
},{
    initialRouteName: 'Menu',
    navigationOptions:{
        headerStyle: {
            backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        }
    }
})

class MainComponent extends Component{

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.OS==='ios' ? 0  : 5}}>
                <MenuNavigator/>
            </View>
        );
    }
}
export default MainComponent;