import React, { Component } from 'react';
import { View , Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A9F4' },
  { text: 'Use this app to find a new gig', color: '#008688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    setTimeout(this.props.navigation.navigate('auth'));
  }

  render () {
    return (
      <View>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
      </View>
    );
  }
}

export default WelcomeScreen;