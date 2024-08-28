import React from 'react'
import color from '../../theme/color'
import { ScrollView, Text, View } from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import ProductCard from '../../components/ProductCard';
import FoodData from '../../dummyData/FoodData';
import ProductBoxView from '../../components/ProductBoxView';

const AllProductsPage = () => {
    const appColors=color();
    return (
        <View
          style={{
            flex: 1,
            backgroundColor: appColors.white,
            padding: 10,
          }}>
          <SearchComponent heading={'Snacks And Drinks'}/>
          <ScrollView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
              {FoodData?.slice(0, 4)?.map(item => {
                return <ProductCard item={item} key={item?.id}/>;
              })}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
               
              }}>
              {FoodData?.slice(0, 2)?.map(item => {
                return <ProductBoxView item={item} key={item?.id}/>;
              })}
            </View>
          </ScrollView>
        </View>
      );
}

export default AllProductsPage