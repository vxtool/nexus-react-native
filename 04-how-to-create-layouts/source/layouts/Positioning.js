import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Positioning extends Component {
  render() {
  	return (
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={[styles.box, styles.big_orange_box]}>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={[styles.box, styles.big_black_box]}>
            <View style={[styles.inner_box, styles.red_box]}></View>
          </View>
          <View style={[styles.big_gray_box]}></View>
          <View style={[styles.box, styles.big_green_box]}>
            <View style={[styles.inner_box, styles.orange_box]}></View>
          </View>
        </View>
        <View style={styles.right}>
          <View style={[styles.box, styles.big_lightblue_box]}>
            <View style={[styles.inner_box, styles.black_box]}></View>
          </View>
          <View style={[styles.inner_box, styles.purple_box]}></View>
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
    backgroundColor: '#333',
  },
  bigGreenBox: {
    backgroundColor: 'green',
  },
  bigOrangeBox: {
    backgroundColor: 'orange',
  },
  bigLightblueBox: {
    backgroundColor: '#03A9F4',
  },
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
  orangeBox: {
    position: 'absolute',
    backgroundColor: 'orange',
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
