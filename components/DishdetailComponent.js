import React,{Component} from 'react'
import {Text, View, ScrollView, FlatList, Modal, StyleSheet, Button} from 'react-native'
import  {Card,Icon,Rating,Input} from 'react-native-elements'
import {DISHES} from "../shared/dishes";
import { COMMENTS} from "../shared/comments";
import {baseUrl} from "../shared/baseUrl";
import {connect} from 'react-redux'
import  {postFavorite,postComment} from "../redux/ActionCreators";


const mapStateToProps = state => {
    return{
        dishes:state.dishes,
        comments:state.comments,
        favorites:state.favorites
    }
};

const mapDispatchToProps = dispatch => ({
    postFavorite:(dishId) => dispatch(postFavorite(dishId)),
    postComment:(comment) => dispatch(postComment(comment))
});


function RenderDish(props) {

    const dish = props.dishes;
    if(dish != null){
        return(
        <Card
          featuredTitle={dish.name}
          image={{uri:baseUrl+dish.image}}
          >
            <Text style={{margin:10}}>
                {dish.description}
            </Text>
            <Icon raised
                  reverse
                  name={props.favorite ? 'heart' : 'heart-o'}
                  type='font-awesome'
                  color='#f50'
                  style={{flexDirection:'row',alignItems:'center'}}
                  onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                  />
            <Icon raised
                  reverse
                  name='pencil'
                  type='font-awesome'
                  color="#512DA8"
                  style={{flexDirection:'row',alignItems:'center'}}
                  onPress={() => props.onPress1()}
            />
        </Card>
        )
    }
    else{
        return(<View></View>)
    }

}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({item,index}) => {
        return(
        <View key={index} style={{margin:10}}>
            <Text style={{fontSize:14}}>{item.comment}</Text>
            <Text style={{fontSize:12}}>{item.rating}</Text>
            <Text style={{fontSize:12}}>{'--' + item.author +', ' + item.date}</Text>
        </View>
        )
    };

    return(
        <Card title='Comments'>
            <FlatList data={comments} renderItem={renderCommentItem} keyExtractor={item => item.id.toString()}/>
        </Card>

    )

}



class DishDetail extends Component{


    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
            author:'',
            comment:'',
        }

    }

    markFavorite(dishId){
            this.props.postFavorite(dishId);
    }

    toggleModal(){
        this.setState({showModal:!this.showModal})
    }
    saveData(rating){
        if(rating === undefined){
            rating = 3.5;
        }
        const comment = {
            rating: rating,
            author: this.state.author,
            comment: this.state.comment
        };
        this.props.postComment(comment);
        console.log("really" + rating+" "+this.state.author+" "+this.state.comment);

    }

    handleShow(){
        this.toggleModal();
    }

    static navigationOptions = {
        title:'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId');
        return(
            <ScrollView>
                 <RenderDish
                     dishes={this.props.dishes.dishes[+dishId]}
                     favorite={this.props.favorites.some(el => el === dishId)}
                     onPress={() => this.markFavorite(dishId)}
                     onPress1={()=>this.handleShow()}
                    />
                 <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
                <Modal animationType = {"slide"}
                       transparent = {false}
                       visible={this.state.showModal}
                       onDismiss = {() => this.toggleModal() }
                       onRequestClose = {() => this.toggleModal() }>
                    <View style = {styles.modal}>
                        <Rating showRating fractions={1} startingValue={3.5}  onFinishRating={this.saveData} />
                        <Input
                            onChangeText={(val)=>this.setState({author:val})}
                            placeholder='Author'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='black'
                                />
                            }
                        />

                        <Input
                            onChangeText={(val)=>this.setState({comment:val})}
                            placeholder='Comment'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='black'
                                />
                            }
                        />


                        <Button
                            onPress = {() =>{this.saveData();}}
                            color="#512DA8"
                            title="Submit"
                        />
                        <Button
                            onPress = {() =>{this.toggleModal();}}
                            color="#512DA8"
                            title="Cancel"
                        />
                    </View>
                </Modal>
            </ScrollView>
        )
    }



}
const styles = StyleSheet.create({
    formRow:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        margin:20
    },
    formLabel:{
        fontSize:18,
        flex:2
    },
    formItem:{
        flex:1
    },
    modal:{
        justifyContent: 'center',
        margin:20
    },
    modalTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor:'#512DA8',
        textAlign: 'center',
        color:'white',
        marginBottom:20
    },
    modalText:{
        fontSize:18,
        margin:10
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(DishDetail);