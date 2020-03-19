import React,{Component} from 'react'
import {Text,ScrollView,View,FlatList} from 'react-native'
import {Card, ListItem} from 'react-native-elements'
import {baseUrl} from "../shared/baseUrl";
import {connect} from 'react-redux'
import {LoadingComponent} from "./LoadingComponent";


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
                    <History/>
                    <Card>
                        <Text>{this.props.leaders.errMess}</Text>
                    </Card>
                </ScrollView>
            )
        }
    else{
        return (
            <ScrollView>
                <History/>
                <Card>
                    <FlatList
                        data={this.props.leaders.leaders}
                        renderItem={renderLeaders}
                    />
                </Card>
            </ScrollView>
        );
        }
    }
}
export default connect(mapStateToProps)(About);