import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    height: 80,
    // backgroundColor: 'yellow',
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '6%',
  },
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 25,
    borderWidth: 1,
  },
  HeaderHead: {
    fontSize: 20,
    fontWeight: '900',
  },
  dayDate: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'grey',
  },
});
