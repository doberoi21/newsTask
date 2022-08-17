import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import Header from '../../componets/Header';
import RecentNews from '../../componets/RecentNews';

const Home = () => {
  return (
    <View style={style.container}>
      <Header />
      <RecentNews />
    </View>
  );
};

export default Home;
