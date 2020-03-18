import React,{Component} from 'react'
import {Text,ScrollView,View,FlatList} from 'react-native'
import {Card, ListItem} from 'react-native-elements'
import {ADDRESS} from "../shared/address";
import {LEADERS} from "../shared/leaders";
import {baseUrl} from "../shared/baseUrl";
import {connect} from 'react-redux'


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
        return (
            <View>
                {console.log(this.props.leaders)}
                {/*<History history={this.props.history.history}/>*/}
                <Card>
                    <FlatList
                        data={this.props.leaders.leaders}
                        renderItem={renderLeaders}
                    />
                </Card>

            </View>


        );
    }
}
export default connect(mapStateToProps)(About);