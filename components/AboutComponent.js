import React,{Component} from 'react'
import {Text,ScrollView,View,FlatList} from 'react-native'
import {Card, ListItem} from 'react-native-elements'
import {baseUrl} from "../shared/baseUrl";
import {connect} from 'react-redux'
import {LoadingComponent} from "./LoadingComponent";
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return{
        leaders:state.leaders
    }
};

function History(props) {
    const item = props.history;
  return(
      <Card
          title="Our History"
      >
          <Text>
              {item}
          </Text>
      </Card>
  )

}

class About extends Component{

    static navigationOptions={
        title:'About'
    };

    render() {
        const renderLeaders = ({item, index}) => {

            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: {uri:baseUrl+item.image}}}
                />
            );
        };

        if(this.props.leaders.isLoading){
            return(
                <ScrollView>
                    <History/>
                    <Card>
                        <LoadingComponent/>
                    </Card>
                </ScrollView>
            )
        }
        else if(this.props.leaders.errMess){
            return(
                <ScrollView>
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <History/>
                        <Card>
                            <Text>{this.props.leaders.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            )
        }
    else{
        return (
            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                    <History/>
                    <Card>
                        <FlatList
                            data={this.props.leaders.leaders}
                            renderItem={renderLeaders}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
        }
    }
}
export default connect(mapStateToProps)(About);