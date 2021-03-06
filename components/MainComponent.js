import React,{Component} from 'react'
import {DISHES} from '../shared/dishes'
import Menu from './MenuComponent';
import Home from './HomeComponent'
import {View,Platform, Image, StyleSheet, ScrollView,Text} from 'react-native'
import DishDetail from "./DishdetailComponent";
import { createStackNavigator,createDrawerNavigator, DrawerItems, SafeAreaView }  from 'react-navigation'
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {Icon} from 'react-native-elements'
import {fetchComments,fetchLeaders,fetchDishes,fetchPromotions} from "../redux/ActionCreators";
import {connect} from 'react-redux'
import Favorites from './FavoriteComponent'
import Reservation from './ReservationComponent'
import Login from './LoginComponent';


const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        comments:state.comments,
        promotions:state.promotions,
        leaders:state.leaders
    }
}

const mapDispatchToProps = dispatch =>({
    fetchDishes:()=>dispatch(fetchDishes()),
    fetchPromotions:()=>dispatch(fetchPromotions()),
    fetchComments:()=>dispatch(fetchComments()),
    fetchLeaders:()=>dispatch(fetchLeaders()),

})





const MenuNavigator = createStackNavigator({
    Menu:{screen: Menu,
        navigationOptions:({ navigation }) => ({
            headerLeft: <Icon name="menu"
                              size={24}
                              color='white'
                              onPress={()=> navigation.toggleDrawer()}/>
        })},
    DishDetail:{screen: DishDetail},
    Contact:{screen:Contact},
    About:{screen:About},

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
});




const HomeNavigator = createStackNavigator({
    Home:{screen: Home},
},{
    navigationOptions:({navigation}) =>({
        headerStyle: {
            backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        },
        headerLeft: <Icon name="menu"
                          size={24}
                          color='white'
                          onPress={()=> navigation.toggleDrawer()}/>
    })
});

const ContactNavigator = createStackNavigator({
    Contact:{screen: Contact},
},{
    navigationOptions:({navigation}) =>({
        headerStyle: {
            backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        },
        headerLeft: <Icon name="menu"
                          size={24}
                          color='white'
                          onPress={()=> navigation.toggleDrawer()}/>
    })
});

const ReservationNavigator = createStackNavigator({
    Reservation:{screen: Reservation},
},{
    navigationOptions:({navigation}) =>({
        headerStyle: {
            backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        },
        headerLeft: <Icon name="menu"
                          size={24}
                          color='white'
                          onPress={()=> navigation.toggleDrawer()}/>
    })
});

const FavoritesNavigator = createStackNavigator({
    Favorites:{screen: Favorites},
},{
    navigationOptions:({navigation}) =>({
        headerStyle: {
            backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        },
        headerLeft: <Icon name="menu"
                          size={24}
                          color='white'
                          onPress={()=> navigation.toggleDrawer()}/>
    })
});



const AboutNavigator = createStackNavigator({
    About:{screen: About},
},{
    navigationOptions:({navigation}) =>({
        headerStyle: {
            backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        },
        headerLeft: <Icon name="menu"
                          size={24}
                          color='white'
                          onPress={()=> navigation.toggleDrawer()}/>
    })
});
const LoginNavigator = createStackNavigator({
    Login:{screen: Login},
},{
    navigationOptions:({navigation}) =>({
        headerStyle: {
            backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        },
        headerLeft: <Icon name="menu"
                          size={24}
                          color='white'
                          onPress={()=> navigation.toggleDrawer()}/>
    })
});

const CustomDrawerContentComponenet = (props) => (
        <ScrollView>
            <SafeAreaView style={styles.container}
                          forceInset={{top:'always', horizontal:'never'}}>
                    <View style={styles.drawerHeader}>
                        <View style={{flex:1}}>
                            <Image source={require('../shared/images/logo.png')}
                                   style={styles.drawerImage}
                                    />
                        </View>
                         <View style={{flex:2}}>
                             <Text style={styles.drawerHeaderText}> Ristorante </Text>
                         </View>
                    </View>
                    <DrawerItems {...props}/>
            </SafeAreaView>
        </ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Login:{
        screen: LoginNavigator,
        navigationOptions:{
            title:'Login',
            drawerLabel:'Login',
            drawerIcon:({tintColor}) => (
                <Icon
                    name='sign-in'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
        Home:{
           screen: HomeNavigator,
           navigationOptions:{
               title:'Home',
               drawerLabel:'Home',
               drawerIcon:({tintColor}) => (
                   <Icon
                       name='home'
                       type='font-awesome'
                       size={24}
                       color={tintColor}
                   />
               )
           }
        },
        Menu:{
            screen:MenuNavigator,
            navigationOptions:{
                title:'Menu',
                drawerLabel:'Menu',
                drawerIcon:({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen:ContactNavigator,
            navigationOptions:{
                title:'Contact Us',
                drawerLabel:'Contact Us',
                drawerIcon:({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {
            screen:AboutNavigator,
            navigationOptions:{
                title:'info-circlex',
                drawerLabel:'About Us',
                drawerIcon:({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
    Reservation: {
        screen:ReservationNavigator,
        navigationOptions:{
            title:'Reserve Table',
            drawerLabel:'Reserve Table',
            drawerIcon:({tintColor}) => (
                <Icon
                    name='cutlery'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Favorites: {
        screen:FavoritesNavigator,
        navigationOptions:{
            title:'My Favorites',
            drawerLabel:'My Favorites',
            drawerIcon:({tintColor}) => (
                <Icon
                    name='heart'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    }

},{
    //To not to make first page of login we should write down following
    //It will route to Home when app will open
    initialRouteName:'Home',
    drawerBackgroundColor:'#D1C4E9',
    contentComponent:CustomDrawerContentComponenet
})





class MainComponent extends Component{
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchLeaders();
    }
    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.OS==='ios' ? 0  : 5}}>
                <MainNavigator/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    drawerHeader:{
        backgroundColor:'#512DA8',
        height:140,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row'
    },
    drawerHeaderText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    },
    drawerImage:{
        margin:10,
        width:80,
        height:60
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);