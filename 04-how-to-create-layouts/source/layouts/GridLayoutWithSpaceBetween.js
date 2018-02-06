import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class GridLayoutWithSpaceBetween extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.box]}>
            <View style={styles.innerBox2}></View>
          </View>
          <View style={[styles.box]}>
            <View style={styles.innerBox}></View>
          </View>
          <View style={[styles.box, styles.two]}>
            <View style={styles.innerBox3}></View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.two]}>
            <View style={styles.innerBox}></View>
          </View>
          <View style={[styles.box]}>
            <View style={styles.innerBox2}></View>
          </View>
          <View style={[styles.box]}>
            <View style={styles.innerBox3}></View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box]}>
            <View style={styles.innerBox3}></View>
          </View>
          <View style={[styles.box, styles.two]}>
            <View style={styles.innerBox2}></View>
          </View>
          <View style={[styles.box]}>
            <View style={styles.innerBox}></View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box]}>
            <View style={styles.innerBox2}></View>
          </View>
          <View style={[styles.box]}>
            <View style={styles.innerBox3}></View>
          </View>
          <View style={[styles.box]}>
            <View style={styles.innerBox}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    flex: 1,
    height: 100,
    padding: 10,
    backgroundColor: '#fff'
  },
  innerBox: {
    flex: 1,
    backgroundColor: '#333'
  },
  innerBox2: {
    flex: 1,
    backgroundColor: 'green'
  },
  innerBox3: {
    flex: 1,
    backgroundColor: 'orange'
  },
  two: { flex: 2 }
});
