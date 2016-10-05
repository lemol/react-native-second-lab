/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView
} from 'react-native';

class second extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{height: 50, backgroundColor: 'powderblue'}}>
          <Text>
            {this.state.text.toUpperCase()}
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <ScrollView>
            <Text style={{fontSize: 40}}>Lemolsoft</Text>
            <Text style={{fontSize: 40}}>Lemol-C Software</Text>
            <Text style={{fontSize: 40}}>Lemolsoft</Text>
            <Text style={{fontSize: 40}}>Lemolsoft</Text>
            <Text style={{fontSize: 40}}>Lemol-C Software</Text>
            <Text style={{fontSize: 40}}>Lemol-C Software</Text>
            <Text style={{fontSize: 40}}>Lemolsoft</Text>
            <Text style={{fontSize: 40}}>Lemolsoft</Text>
            <Text style={{fontSize: 40}}>Lemol-C Software</Text>
            <Text style={{fontSize: 40}}>Lemol-C Software</Text>
            <Text style={{fontSize: 40}}>Lemolsoft</Text>
            <Text style={{fontSize: 40}}>Lemolsoft</Text>
            <Text style={{fontSize: 40}}>Lemol-C Software</Text>
          </ScrollView>
        </View>
        <View style={{
          flexDirection: 'row',
          height: 50,
          justifyContent: 'space-between'
        }}>
          <View style={{width: 50, backgroundColor: 'steelblue'}} />
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <TextInput
              style={{}}
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({text})}
            />
          </View>
          <View style={{width: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF00FF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('second', () => second);
