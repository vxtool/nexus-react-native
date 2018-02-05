import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.box}>
          Welcome to React Native!
        </Text>
        <Text style={styles.box}>
          <Text>
            To get started, edit App.js
          </Text>

          <Text style={styles.boxText}>
            To get started, edit App.js
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  boxText: {
    color: 'blue',
  },
};
