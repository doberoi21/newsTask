import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';
import NewsList from '../NewsList';

const RecentNews = () => {
  return (
    <View style={style.container}>
      <NewsList />
    </View>
  );
};

export default RecentNews;
