import React from 'react';
import {Image, Text, View} from 'react-native';
import color from '../theme/color';

function ProductBoxView({item}) {
  const appColors = color();
  return (
    <View
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: appColors.offWhite,
        margin: 7,
        borderRadius: 10,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 0.7,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontSize: 14, fontWeight: 400, color: appColors.black}}>
           {item?.title}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{fontSize: 12, fontWeight: 700, color: appColors.black}}>
              250 GM
            </Text>
          </View>
          <View>
            <Text
              style={{fontSize: 12, fontWeight: 700, color: appColors.black}}>
              ₹ 24
            </Text>
          </View>
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'column', flex: 0.25}}>
        <View style={{marginBottom:2,borderRadius:10,backgroundColor:'white'}}>
          <Image
            style={{width: 75, height: 80, resizeMode: 'center'}}
            source={{uri: item?.thumbnail}}
          />
        </View>
        <View style={{backgroundColor: appColors.white, padding: 10,borderRadius:10,marginTop:5,alignItems:'center',justifyContent:"center"}}>
          <Text style={{fontSize: 14, fontWeight: 700, color: appColors.green}}>
           + Add
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ProductBoxView;
