import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import color from '../../theme/color';
import FoodCategories from '../../dummyData/FoodCategories';
import ProductCategoryComponent from '../../components/ProductCategoryComponent';
import FoodData from '../../dummyData/FoodData';
import SearchResultScreen from '../searchResult/SearchResultScreen';

function SearchScreen() {
  const appColors = color();
  const [searchText, setSearchText] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const isEmpty = text => {
    if (text == null || text?.length === 0) {
      return true;
    }
    return false;
  };

  const isArrayEmpty = arr => {
    if (arr.length === 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isEmpty(searchText)) {
      setSearchResult([]);
    } else {
      const arr = FoodData.filter(item => {
        return item?.title?.includes(searchText);
      });
      setSearchResult(arr);
    }
  }, [searchText]);
  return (
    <View style={{flex: 1, backgroundColor: appColors.white, padding: 10}}>
      <View style={{}}>
        <TextInput
          style={{
            elevation: 5,
            borderRadius: 20,
            // borderWidth: 1,
            backgroundColor: appColors.white,
            marginTop: 6,
            paddingHorizontal: 10,
            paddingVertical: 6,
            color: appColors.searchText,
          }}
          value={searchText}
          multiline={true}
          placeholder="Search"
          placeholderTextColor={appColors.offWhite}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginVertical: 15,
        }}>
        {isArrayEmpty(searchResult) ? (
          FoodCategories?.map(item => (
            <ProductCategoryComponent key={item.id} item={item} />
          ))
        ) : (
          <SearchResultScreen result={searchResult} />
        )}
      </View>
    </View>
  );
}

export default SearchScreen;
