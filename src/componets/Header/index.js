import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from './style';

const Header = () => {
  var today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Text style={style.dayDate}>
          {day} , {date}
        </Text>
        <Text style={style.HeaderHead} >TOP NEWS</Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
          }}
          style={style.profileImg}
        />
      </View>
    </View>
  );
};

export default Header;
