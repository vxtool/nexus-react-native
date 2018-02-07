import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Positioning extends Component {
  render() {
  	return (
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={[styles.box, styles.bigRedBox]}>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={[styles.box, styles.bigBlueBox]}>
            <View style={[styles.innerBox, styles.blackBox]}></View>
          </View>
          <View style={[styles.bigGrayBox]}></View>
          <View style={[styles.box, styles.bigGreenBox]}>
            <View style={[styles.innerBox, styles.blackBox]}></View>
          </View>
        </View>
        <View style={styles.right}>
          <View style={[styles.box, styles.bigYellowBox]}>
            <View style={[styles.innerBox, styles.blackBox]}></View>
          </View>
          <View style={[styles.innerBox, styles.purpleBox]}></View>
        </View>
      </View>
  	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
  },
  middle: {
    flex: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#f2f2f2',
  },
  bigGreenBox: { backgroundColor: 'green' },
  bigRedBox: { backgroundColor: 'red' },
  bigYellowBox: { backgroundColor: 'yellow' },
  bigGrayBox: {
    height: 100,
    alignSelf: 'stretch',
    backgroundColor: '#ccc'
  },
  innerBox: {
    width: 20,
    height: 20,
  },
  redBox: {
    position: 'relative',
    backgroundColor: 'red',
    top: 10,
    left: 10
  },
  blueBox: {
    position: 'absolute',
    backgroundColor: 'blue',
    top: 10,
    right: 10
  },
  purpleBox: {
    position: 'absolute',
    backgroundColor: 'purple',
    bottom: 10,
    right: 10
  },
  blackBox: {
    position: 'relative',
    backgroundColor: 'black',
  }
});
