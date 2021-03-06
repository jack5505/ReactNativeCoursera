import React,{Component} from 'react'
import {Text,View,ScrollView,StyleSheet,Picker,Switch,Modal,Button,Alert} from 'react-native'
import DatePicker from 'react-native-datepicker'
import * as Animatable from "react-native-animatable";
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

class ReservationComponent extends Component{


    constructor(props) {
        super(props);
        this.state={
            guests:1,
            smoking:false,
            date:'',
            showModals:false
        }
    }
    static navigationOptions = {
        title: 'Reserve Table'
    };

    toggleModal(){
        this.setState({showModals:!this.showModal})
    }

    resetForm() {
        this.setState({
            guests: 1,
            smoking: false,
            date: '',
            showModals: false
        });
    }

    handleReservation() {
        Alert.alert('Your Reservation OK?',
            'Number of Guests:'+this.state.guests+'\n'+'Smoking?'+this.state.smoking+'\n'+'Date and Time'+this.state.date,
            [
                {
                    text:'Cancel',
                    onPress:()=> console.log("Cancel Pressed"),
                    style:'cancel'
                },
                {
                    text:'OK',
                    onPress:()=> {
                        this.resetForm();
                        this.toggleModal();
                        this.presentLocalNotification(this.state.date);
                    }

                }
            ],
            {cancelable:false}
        )
        console.log(JSON.stringify(this.state));
      //  this.toggleModal();
    }

    async obtainNotificationPermissions(){
        let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
        if(permission.status !== 'granted'){
            permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
            if(permission.status !=='granted'){
                Alert.alert('Permissions not granted to show notifications');

            }

        }
        return permission;
    }

    async presentLocalNotification (date){
        await this.obtainNotificationPermissions();
        Notifications.presentLocalNotificationAsync({
            title:'Your reservation',
            body:'Reservation for'+ date+' requested',
            ios:{
                sound:true
            },
            android:{
                sound:true,
                vibrate:true,
                color:'#512DA8'
            }
        });
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Number of guests</Text>
                        <Picker style={styles.formItem} selectedValue={this.state.guests} onValueChange={(itemValue,itemIndex) => this.setState({guests:itemValue}) }>
                            <Picker.Item label='1' value='1'/>
                            <Picker.Item label='2' value='2'/>
                            <Picker.Item label='3' value='3'/>
                            <Picker.Item label='4' value='4'/>
                            <Picker.Item label='5' value='5'/>
                            <Picker.Item label='6' value='6'/>
                        </Picker>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Smoking Non/Smoking</Text>
                        <Switch style={styles.formItem} value={this.state.smoking} onTintColor='#51DA8' onValueChange={(value) => this.setState({smoking:value})}/>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Date and Time</Text>
                        <DatePicker
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
                    <View style={styles.formRow}>
                        <Button
                            onPress={() => this.handleReservation()}
                            title="Reserve"
                            color="#512DA8"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </Animatable.View>
                <Modal animationType = {"slide"} transparent = {false}
                       visible={this.state.showModals}
                       onDismiss = {() => this.toggleModal() }
                       onRequestClose = {() => this.toggleModal() }>
                    <View style = {styles.modal}>
                        <Text style = {styles.modalTitle}>Your Reservation</Text>
                        <Text style = {styles.modalText}>Number of Guests: {this.state.guests}</Text>
                        <Text style = {styles.modalText}>Smoking?: {this.state.smoking ? 'Yes' : 'No'}</Text>
                        <Text style = {styles.modalText}>Date and Time: {this.state.date}</Text>
                        <Button
                            onPress = {() =>{this.toggleModal(); this.resetForm();}}
                            color="#512DA8"
                            title="Close"
                        />
                    </View>
                </Modal>
            </ScrollView>
        );
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

export default ReservationComponent;