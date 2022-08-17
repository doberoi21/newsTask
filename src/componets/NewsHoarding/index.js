import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {style} from './style';
import {Hoardings} from '../../assets/Hoardings';

const NewsHoarding = () => {
  const renderItem = ({item}) => {
    return (
      <View style={style.listContainer}>
        <Image source={{uri: item.imgUrl}} style={style.listImg} />
        <Text style={[style.tag]}>{item.tag}</Text>
        <Text style={style.headline}>{item.headline}</Text>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <FlatList
        data={Hoardings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={style.partition}></View>
    </View>
  );
};

export default NewsHoarding;
