import _ from lodash;
import React, { Component } from 'react';
import { View , Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A9F4' },
  { text: 'Use this app to find a new gig', color: '#008688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    this.setState({ token });
    
    if (token) {
      this.props.navigation.navigate('map');
    } else  {
      this.setState({ token: false });
    }

  }

  onSlidesComplete = () => {
    setTimeout(this.props.navigation.navigate('auth'));
  }

  render () {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <View>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
      </View>
    );
  }
}

export default WelcomeScreen;