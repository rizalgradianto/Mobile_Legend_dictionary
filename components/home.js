import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';


export class Home extends Component{
  render(){
    return(
      <View style= {nbStyles.container}>
          <Text style={{fontSize: 20, marginTop:30, textAlign: 'center', color: '#0A3C54', fontWeight : 'bold'}}>
            Welcome to Mobile Legend
          </Text>

          

          <Text style={nbStyles.subtitle}>
            Heroes Dictionary
          </Text>
          <Text style={nbStyles.subtitle}>
            Start Exploring/Creating
          </Text>
          <Text style={nbStyles.subtitle}>
            Your Favorite Heroes
          </Text>

          <Button block style={nbStyles.btn}  onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text style={{color: '#fff', fontWeight : 'bold'}}>Get Started</Text>
          </Button>
        </View>
    );
  }
}

const nbStyles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CDDDE3',
        fontWeight : 'bold',
    },
    subtitle: {
        textAlign: 'center',
        color: '#1D8995'
    },
    btn: {
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: '#286680',
        paddingVertical: 5,
        height: 45,
        width: 200,
        alignSelf: 'center',
    },
}