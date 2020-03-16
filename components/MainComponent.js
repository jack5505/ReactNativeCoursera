import React,{Component} from 'react'
import {DISHES} from '../shared/dishes'
import Menu from './MenuComponent';
import Home from './HomeComponent'
import {View,Platform} from 'react-native'
import DishDetail from "./DishdetailComponent";
import { createStackNavigator,createDrawerNavigator }  from 'react-navigation'
import Contact from "./ContactComponent";
import About from "./AboutComponent";


const MenuNavigator = createStackNavigator({
    Menu:{screen: Menu},
    DishDetail:{screen: DishDetail},
    Contact:{screen:Contact},
    About:{screen:About}

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
const HomeNavigator = createStackNavigator({
    Home:{screen: Home},
},{
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

const ContactNavigator = createStackNavigator({
    Contact:{screen: Contact},
},{
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

const AboutNavigator = createStackNavigator({
    About:{screen: About},
},{
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

const MainNavigator = createDrawerNavigator({
        Home:{
           screen: HomeNavigator,
           navigationOptions:{
               title:'Home',
               drawerLabel:'Home'
           }
        },
        Menu:{
            screen:MenuNavigator,
            navigationOptions:{
                title:'Menu',
                drawerLabel:'Menu'
            }
        },
        Contact: {
            screen:ContactNavigator,
            navigationOptions:{
                title:'Contact Us',
                drawerLabel:'Contact Us'
            }
        },
        About: {
            screen:AboutNavigator,
            navigationOptions:{
                title:'About Us',
                drawerLabel:'About Us'
            }
        }

},{
    drawerBackgroundColor:'#D1C4E9'
})





class MainComponent extends Component{

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.OS==='ios' ? 0  : 5}}>
                <MainNavigator/>
            </View>
        );
    }
}
export default MainComponent;