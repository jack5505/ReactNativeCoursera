import React,{Component} from 'react'
import {Text,ScrollView,View} from 'react-native'
import {Card} from 'react-native-elements'
import {ADDRESS} from "../shared/address";

class Contact extends Component{

    static navigationOptions={
        title:'Contact'
    }

    constructor(props) {
        super(props);
        this.state = {
            contact:ADDRESS
        }
    }

    render() {
        return (
            <Card
                title="Contact Information"
                featuredSubtitle="Contact Information"
            >
                <Text>
                    {this.state.contact.template}
                </Text>
            </Card>
        );
    }
}

export default Contact;