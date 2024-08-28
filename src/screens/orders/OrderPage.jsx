import React from 'react';
import {Text, View} from 'react-native';
import color from '../../theme/color';

function OrderPage() {
  const appColors = color();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontSize: 16, color: appColors.black, fontWeight: 700}}>OrderPage!</Text>
  </View>
  );
}

export default OrderPage;
