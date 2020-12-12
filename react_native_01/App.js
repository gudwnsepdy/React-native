/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';


class App extends Component {
  
  state = {
    appName: 'My First App',
    random: [36, 999]
  }


  onAddRandomNum = () => {
    alert('add random number!!!')
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>
        <View>
         <Text style={styles.mainText}
             onPress={()=>alert('text Touch event')}>
               Hello World</Text>
        </View>
        
 
        <Generator add={this.onAddRandomNum}/>
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
    justifyContent: 'center'
  },
  
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center'
  }
})
export default App;
