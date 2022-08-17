import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: height * 0.8,
    marginTop: '3%',
    marginHorizontal: '2%',
  },
  listContainer: {
    // backgroundColor: 'yellow',
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.3,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 5,
  },
  listImg: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    width: '40%',
    backgroundColor: 'blue',
  },
  TextContent: {
    width: '60%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
  },
  TagText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    backgroundColor: 'purple',
    width: '85%',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  HeadlineText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  RecentHead: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
});
