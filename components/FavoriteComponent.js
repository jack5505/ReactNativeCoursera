import React,{Component} from 'react'
import {Text,ScrollView,View,FlatList,Alert} from 'react-native'
import {Card, ListItem} from 'react-native-elements'
import {baseUrl} from "../shared/baseUrl";
import {connect} from 'react-redux'
import {LoadingComponent} from "./LoadingComponent";
import SwipeOut from 'react-native-swipeout';
import {deleteFavorite} from "../redux/ActionCreators";

const mapStateToProps = state =>{
    return{
        dishes:state.dishes,
        favorites:state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    deleteFavorite:(dishId) => dispatch(deleteFavorite(dishId))
})

class Favorites extends Component{

    static navigationOptions = {
        title: 'My Favorites'
    }

    render() {
        const {navigate} = this.props.navigation;


        const renderMenuItem = ({item,index}) =>{
            const rightButton = [
                {
                    text:'Delete',
                    type:'delete',
                    onPress:() =>{
                        Alert.alert('Delete Favorite ?','Are you wish to delete ' +
                            'favorite dish ' + item.name,
                            [
                                {
                                    text:'Cancel',
                                    onPress:()=> console.log(item.name + ' Not deleted'),
                                    style:'cancel'
                                },
                                {
                                    text:'OK',
                                    onPress:()=> this.props.deleteFavorite(item.id),
                                    style:'cancel'
                                }


                            ],
                            {cancelable:false}
                        )
                    }


                }
            ];

            return(
                <SwipeOut right={rightButton} autoClose={true}>
                  <ListItem key={index}
                            title={item.name}
                            hideChevron={true}
                            onPress={()=>navigate('Dishdetail',{dishId:item.id})}
                            leftAvatar={{source:{uri:baseUrl+item.image}}}
                            subtitle={item.description}/>
                </SwipeOut>
            );

        };

        if(this.props.dishes.isLoading){
            return(
                <LoadingComponent/>
            )
        }
        else if(this.props.dishes.errorMessage){
            return(
                <View>
                    <Text>{this.props.dishes.errorMessage}</Text>
                </View>
            )
        }
        return (
            <FlatList
                data={this.props.dishes.dishes.filter(dish=> this.props.favorites.some(el=>el===dish.id))}
                renderItem={renderMenuItem}
                keyExtractor={item=>item.id.toString()}
            />
        );
    }



}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)