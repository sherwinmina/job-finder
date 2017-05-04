import React, { Component } from 'react';
import { View , Text, Platform } from 'react-native';

class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    header: ({navigate }) => {
      return {
        right: <Button title ="Settings" onPress={() => navigate('settings')}
        title="Settings"
        onPress={() => navigate('settings')}
        backgroundColor="rgba(0, 0, 0, 0)"
        color="rgba(0, 122, 255, 1)"
        />
      };
    }
  }

  render () {
    return (
      <View>
        <Text> ReviewScreen</Text>  
      </View>
    )
  }
}

export default ReviewScreen;