import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class AlignItemsStretch extends Component {
  render() {
  	return (
      <View style={styles.container}>
          <View style={[styles.box, styles.box1]}></View>
          <View style={[styles.box, styles.box2]}></View>
      </View>
  	);
  }
}


const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  box: { flex: 1 },
  box1: { backgroundColor: 'red' },
  box2: { backgroundColor: 'blue' },
  box3: { backgroundColor: 'green' }
});
