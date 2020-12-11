/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import PropsChild from './propsChild'



class App extends Component {

  state = {
    sampleText: 'Hello world',
    sampleBoolean: true,
    sampleNum: 1
  }

  inputText = () => (
    this.state.sampleBoolean ? 
      <Text>sampleBoolean is ture</Text> //true 일 때
    :
      <Text>sampleBoolean is false</Text> //false 일 때 
  )

  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text changed!!',
        sampleBoolean: true
      })
    } else {
        this.setState({
          sampleText: 'Helso World!!!',
          sampleBoolean: false
        })
    }
    
}


  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
  }
  render() {
    return (
      <View style={styles.background}>
        <PropsChild sampleText={this.state.sampleText} changeState={this.changeState}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App;
