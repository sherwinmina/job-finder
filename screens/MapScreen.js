import React, { Component } from 'react';
import { View , Text } from 'react-native';
import { Mapview } from 'expo';

class MapScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1 }} >
        <Mapview style={{ flex: 1 }}/>
      </View>
    )
  }
}

export default MapScreen;