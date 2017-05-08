import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import registerForNotifications from './services/push_notifications';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: {text} } = notification;

      if (origin === 'received' && text){
        Alert.alert(
        'New Push Notification',
        text, 
        [{ text: 'Ok' }]
      );
      }

    });
  }

  render() {
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            style: { width: SCREEN_WIDTH },
            labelStyle: { fontSize: 12 }
          }
        })
      }
    }, 
    {
      navigationOptions: {
        tabBarVisible: false
      }
    } ,
    { 
      lazy: true 
    });

    return (
      <Provider style={styles.container} store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:50
  },
});

Expo.registerRootComponent(App);
