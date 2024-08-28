import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import color from '../../theme/color';
import ProductList from '../../dummyData/ProductList';
import FoodData from '../../dummyData/FoodData';
import ProductCard from '../../components/ProductCard';
import NavigationService from '../../services/NavigationService';

function ProductsPage() {
  const appColors = color();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColors.white,
        padding: 10,
      }}>
      <SearchComponent heading={'Product Categories'}/>
      <ScrollView>
        <TouchableOpacity
        onPress={()=>{
          NavigationService.navigate(NavigationService.screens.AllProductScreen);
        }}
          style={{marginVertical: 15, display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 12, fontWeight: 500, color: appColors.black}}>
            SNACKS & DRINKS
          </Text>
          <View
            style={{
              width: '50%',
              borderBottomColor: appColors.offWhite,
              borderBottomWidth: 2,
              position: 'relative',
              bottom: '50%',
              marginLeft: 15,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
          {FoodData?.slice(0, 8)?.map(item => {
            return <ProductCard item={item} key={item?.id}/>;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default ProductsPage;
