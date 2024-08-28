import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ProductBoxView from '../../components/ProductBoxView';
import SingleProductComponent from '../../components/SingleProductComponent';

function SearchResultScreen({result}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <View style={{marginVertical:10}}>
          {result?.slice(0, 4)?.map(item => {
            return <SingleProductComponent item={item} key={item?.id} />;
          })}
        </View>
        <View style={{marginBottom:20}}>
          {result?.slice(0, 4)?.map(item => {
            return <ProductBoxView item={item} key={item?.id} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default SearchResultScreen;
