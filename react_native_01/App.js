/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker'
class App extends Component {
  
  state = {
    myTextInput: '',
    alphabet: ['a','b','c','d']
  }



  onChangeInput = (event)=> {
    this.setState({
        myTextInput: event
    })
}

  ondAddTextInput =() => {
    this.setState(prevState=>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }
  render() {
    return (
      <View style={styles.mainView}>
        <Picker/>
        {/* <TextInput
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={100}
            autoCapitalize={'none'}
            editable={true}
            />
          <Button
            title="Add Text Input"
            onPress={this.ondAddTextInput}
          
          />

          <ScrollView style={{width: '100%'}}>
            {
              this.state.alphabet.map((item, idx) => (
                <Text 
                style={styles.mainText}
                key={idx}
                >
                  {item}
                </Text>
              ))
            }
            
          </ScrollView>
         */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    
    paddingTop: 50,
    alignContent: 'center',
    //justifyContent: 'center'
  },
  
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
}
})
export default App;
