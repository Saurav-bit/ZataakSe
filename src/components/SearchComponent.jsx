import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import color from '../theme/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationScreen from '../screens/navigation/NavigationScreen';
import NavigationService from '../services/NavigationService';

function SearchComponent({heading,subheading}) {
  const appColors = color();
  return (
    <View
      style={{
        backgroundColor: appColors.white, 
        borderRadius: 10, 
        padding: 20, 
     
    
        shadowColor: appColors.black, 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.1,
        shadowRadius: 10, 
  
        elevation: 6, 

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>{
          NavigationService.goBack()
        }}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={appColors.black}
          />
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 16, color: appColors.black, fontWeight: 700}}>
           {heading}
          </Text>
          <Text style={{fontSize: 12, color: appColors.black, fontWeight: 400}}>
            Select Any product to add
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{
        NavigationService.navigate(NavigationService.screens.SearchScreen)
      }}>
        <MaterialCommunityIcons
          name="magnify"
          size={30}
          color={appColors.black}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SearchComponent;
