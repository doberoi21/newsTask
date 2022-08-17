import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {style} from './style';
import NewsHoarding from '../../componets/NewsHoarding';
import axios from 'axios';

const NewsList = () => {
  const [loading, setLoading] = useState(false);
  const [newsdata, updatedNewsData] = useState([]);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=dfce58c5891f471588b0f1e0183cc027`,
    );
    // console.log(res.data);
    updatedNewsData(res.data.articles);
    setLoading(false);
  }, []);

  const RenderItem = ({item}) => {
    console.log(item);
    return (
      <View style={style.listContainer}>
        <View style={style.TextContent}>
          <Text style={style.TagText}>{item.source.name}</Text>
          <Text style={style.HeadlineText}>{item.title}</Text>
        </View>
        <Image source={{uri: item.urlToImage}} style={style.listImg} />
      </View>
    );
  };
  return (
    <View style={style.container}>
      {loading ? (
        <View style={style.loader}>
          <ActivityIndicator size={'large'} color={'pink'} />
        </View>
      ) : (
        <FlatList
          data={newsdata}
          renderItem={RenderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View>
              <NewsHoarding />
              <View style={style.headContainer}>
                <Text style={style.RecentHead}>Recent News</Text>
              </View>
            </View>
          }
        />
      )}
    </View>
  );
};

export default NewsList;
