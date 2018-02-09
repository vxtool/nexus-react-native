import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar, Platform, View, Text } from 'react-native';
import { Svg } from '@descco/react-native-ui';
import HomePage from './pages/home';
import ArticlesPage from './pages/articles';

const navigationOptions = (headerTitle, { navigation }) => {
  StatusBar.setBarStyle('light-content', true);
  if(Platform.OS === 'android') {
    StatusBar.setBackgroundColor('#171b30', true);
  }

  return {
    headerTitle,
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center'
    },
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#333645'
    },
    headerLeft: () => {
      if (!navigation.state.routeName) {
        return <Text style={{ color: '#fff', paddingLeft: 10 }}>menu</Text>
      }
      return(<Text style={{ color: '#fff', paddingLeft: 10 }} onPress={ () => {navigation.goBack()} }>voltar</Text>);
    },
    headerRight: (
      <View style={{paddingRight: 20}}>
        <Svg image="#icon-star" />
      </View>
    ),
  }
};

export default StackNavigator({
  home: {
    screen: HomePage,
    navigationOptions: navigationOptions.bind(this, 'Home Page'),
  },
  articles: {
    screen: ArticlesPage,
    navigationOptions: navigationOptions.bind(this, 'Articles Page'),
  },
}, {
  mode: 'modal',
});
