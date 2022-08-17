import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: height,
    width: width,
  },
});
