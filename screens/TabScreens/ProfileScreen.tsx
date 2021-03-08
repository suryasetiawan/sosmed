import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
import * as firebase from 'firebase';

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

class ProfileScreen extends React.Component {

    render(){
        return (
            <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../../assets/backgrounds/background-white.jpg')} style={{    justifyContent: 'center',     alignItems: 'center', position:'absolute', zIndex:-1, width:screenWidth, height:screenHeight+50,}} />

                <TouchableOpacity
                onPress={()=>firebase.auth().signOut()}
                >
                    <Text style={{fontSize:35, fontFamily:'logo-font', marginVertical:60, color:'#0095f6'}}>ProfileScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser}, dispatch)
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(ProfileScreen)







