import React,{Component} from 'react'
import {Text,View,ScrollView,StyleSheet,Picker,Switch} from 'react-native'
import {Card} from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

class ReservationComponent extends Component{


    constructor(props) {
        super(props);
        this.state={
            guests:1,
            smoking:false,
            date:''
        }
    }
    static navigationOptions = {
        title: 'Reserve Table'
    };

    render() {
        return (
            <ScrollView>
                <View style={style.formRow}>
                    <Text style={style.formLabel}>Number of guests</Text>
                    <Picker style={style.formItem} selectedValue={this.state.guests} onValueChange={(itemValue,itemIndex) => this.setState({guests:itemValue}) }>
                        <Picker.Item label='1' value='1'/>
                        <Picker.Item label='2' value='2'/>
                        <Picker.Item label='3' value='3'/>
                        <Picker.Item label='4' value='4'/>
                        <Picker.Item label='5' value='5'/>
                        <Picker.Item label='6' value='6'/>
                    </Picker>
                </View>
                <View style={style.formRow}>
                    <Text style={style.formLabel}>Smoking Non/Smoking</Text>
                    <Switch style={style.formItem} value={this.state.smoking} onTintColor='#51DA8' onValueChange={(value) => this.setState({smoking:value})}/>
                </View>
                <View style={style.formRow}>
                    <Text style={style.formLabel}>Date and Time</Text>
                    <DatePicker
                        style={{flex:2,marginRight:20}}
                        date={this.state.date}
                        format=''
                        mode='datetime'
                        placeholder='select date and time'
                        minDate='2019-01-01'
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        onDateChange={(date) => this.setState({date:date})}
                    />
                </View>
            </ScrollView>
        );
    }

}
const style = StyleSheet.create({
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
    }
})

export default ReservationComponent;