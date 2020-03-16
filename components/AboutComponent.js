import React,{Component} from 'react'
import {Text,ScrollView,View} from 'react-native'
import {Card, ListItem} from 'react-native-elements'
import {ADDRESS} from "../shared/address";
import {LEADERS} from "../shared/leaders";



function RenderItem(props) {
    const item = props.item;
    if(item != null){
        return(
            <View>
                <ListItem
                    leftAvatar={{source:require('../shared/images/alberto.png')}}
                    title={item.name}
                />
                <Text>
                    {item.description}
                </Text>
            </View>

        )
    }else{
        return(
            <View/>
        )
    }

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
        return (
            <View>
                <Card
                    title="Our History"
                    >
                    <Text>
                        {this.state.history}
                    </Text>
                </Card>
                <Card
                    title="Corporate Leadership"
                >
                {

                    this.state.leaders.map((leader) =>{
                        return <RenderItem item={leader} key={leader.id}/>
                    })
                }
                </Card>


            </View>


        );
    }
}
export default About;