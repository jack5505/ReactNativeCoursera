import React,{Component} from 'react'
import {Text,ScrollView,View} from 'react-native'
import {Card} from 'react-native-elements'
import {ADDRESS} from "../shared/address";
import * as Animatable from 'react-native-animatable';

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
            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                    <Card
                        title="Contact Information"
                        featuredSubtitle="Contact Information">
                        <Text>
                            {this.state.contact.template}
                        </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;