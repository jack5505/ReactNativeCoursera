import React,{Component} from 'react'
import {Text,ScrollView,View,FlatList} from 'react-native'
import {Card, ListItem} from 'react-native-elements'
import {ADDRESS} from "../shared/address";
import {LEADERS} from "../shared/leaders";



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


    constructor(props) {
        super(props);
        this.state = {
            history:ADDRESS.history,
            leaders:LEADERS
        }
    }

    static navigationOptions={
        title:'About'
    }

    render() {
        const renderLeaders = ({item, index}) => {

            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('../shared/images/alberto.png') }}
                />
            );
        }
        return (
            <View>
                <History history={this.state.history}/>
                <Card>
                    <FlatList
                        data={this.state.leaders}
                        renderItem={renderLeaders}
                    />
                </Card>

            </View>


        );
    }
}
export default About;