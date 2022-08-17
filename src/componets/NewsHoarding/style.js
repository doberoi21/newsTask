import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {

    height: height * 0.38,
    width: width,
    marginBottom: '3%',
    marginTop: '2%',
  },
  partition: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    // marginHorizontal: '4%',
  },
  listImg: {
    height: 200,
    width: '92%',
    borderRadius: 10,
  },
  listContainer: {
    // backgroundColor: 'yellow',
    marginLeft: 3,
    width: width,
    height: '100%',
  },
  tag: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: '2%',
    marginLeft: 5,
  },
  headline: {
    fontSize: 18,
    fontWeight: '800',
    marginVertical: '2%',
    marginLeft: 5,
    width: width * 0.85,
  },
});
