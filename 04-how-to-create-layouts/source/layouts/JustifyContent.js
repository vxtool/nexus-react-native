import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const boxCount = 3;
const boxHeight = height / boxCount - 20;

export default class JustifyContent extends Component {
  render() {
	return (
		<View style={styles.container}>
		    <View style={[styles.box, styles.box1]}></View>
		    <View style={[styles.box, styles.box2]}></View>
		    <View style={[styles.box, styles.box3]}></View>
		</View>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  box: { height: boxHeight },
  box1: { backgroundColor: 'red' },
  box2: { backgroundColor: 'blue' },
  box3: { backgroundColor: 'green' }
});
