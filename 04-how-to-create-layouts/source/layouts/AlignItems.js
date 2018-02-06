import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class AlignItems extends Component {
  render() {
  	return (
      <View style={styles.wrapper}>
    		<View style={styles.container}>
    		    <View style={[styles.box, styles.box1]}></View>
    		    <View style={[styles.box, styles.box2]}></View>
    		    <View style={[styles.box, styles.box3]}></View>
    		</View>
        <View style={styles.container2}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
      </View>
  	);
  }
}


const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  container2: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  box: {
    width: 100,
    height: 100
  },
  box1: { backgroundColor: 'red' },
  box2: { backgroundColor: 'blue' },
  box3: { backgroundColor: 'green' }
});
