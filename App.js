import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagePickerSample from './components/ImagePickerSample/ImagePickerSample';

export default class App extends React.Component {
  render() {
    return (
      <ImagePickerSample />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
