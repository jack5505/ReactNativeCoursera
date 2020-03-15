import React,{Component} from 'react'
import {Text,View} from 'react-native'

class Home extends Component{


    static navigationOptions={
        title:'Home'
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    Home Componet
                </Text>
            </View>
        );
    }
}

export default Home;