/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {

    state = {
        contry: 'canada'
    }
  render() {
      return (
          <View style={styles.container}>
              <Slider
              style={{height: 40, width: 300}}
              />
              
              <Picker style={{height: 50, width: 250}}
              selectedValue={this.state.contry}
              onValueChange={(val, idx) =>
                this.setState({contry: val})
            }

              >
                  <Picker.Item label="Korea" value="korea"/>
                  <Picker.Item label="Canada" value="canada"/>
              </Picker>

          </View>
      )
  }
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: 'center'
    }
}
)
export default PickerComponent;