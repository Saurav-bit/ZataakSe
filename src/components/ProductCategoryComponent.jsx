import React from 'react';
import {Text, View} from 'react-native';
import color from '../theme/color';

function ProductCategoryComponent({item}) {
  const appColors = color();
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        margin: 5,
        borderColor: appColors.offWhite,
      }}>
      <Text style={{color: appColors.black, fontSize: 12}}>{item.title}</Text>
    </View>
  );
}

export default ProductCategoryComponent;
