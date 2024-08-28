import React from 'react';
import {Image, Text, View} from 'react-native';
import color from '../theme/color';

function SingleProductComponent({item}) {
  const appColors = color();
  return (
    <View
      style={{
        padding: 7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
  
        gap: 10,
      }}>
      <View style={{backgroundColor: 'white', }}>
        <Image
          style={{width: 25, height: 35, resizeMode: 'cover'}}
          source={{uri: item?.thumbnail}}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 12, color: appColors.black, fontWeight: 500}}>
          {item?.title} - 22gm
        </Text>
      </View>
    </View>
  );
}

export default SingleProductComponent;
