import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import color from '../../theme/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderPage from '../orders/OrderPage';
import ProductsPage from '../products/ProductsPage';
import OverViewPage from '../overview/OverViewPage';
import ProfilePage from '../profile/ProfilePage';
import NavigationService from '../../services/NavigationService';
import AllProductsPage from '../allProducts/AllProductsPage';
import SearchScreen from '../SearchScreen/SearchScreen';

function NavigationScreen() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const appColors = color();
  console.log('app->', appColors);

  const ProductStack = () => (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationService.screens.ProductScreen}>
      <Stack.Screen
        name={NavigationService.screens.ProductScreen}
        component={ProductsPage}
      />
      <Stack.Screen
        name={NavigationService.screens.ProductSearchScreen}
        component={ProductsPage}
      />
      <Stack.Screen
        name={NavigationService.screens.AllProductScreen}
        component={AllProductsPage}
      />
      <Stack.Screen
        name={NavigationService.screens.SearchScreen}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );

  function MyTabs() {
    return (
      <Tab.Navigator
        id="TabNavigator"
        backBehavior="history"
        initialRouteName="Products"
        screenOptions={({route}) => ({
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 5,
            height: 65,
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}>
        <Tab.Screen
          name="Orders"
          component={OrderPage}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Products"
          component={ProductStack}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Overview"
          component={OverViewPage}
          options={{
            tabBarLabel: 'Overview',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={appColors.white} />
      <SafeAreaView
        forceInset={{vertical: 'always'}}
        style={[{backgroundColor: appColors.white, flex: 1}]}>
        <View style={{flex: 1, backgroundColor: appColors.white}}>
          <NavigationContainer ref={NavigationService.navigationRef}>
            {MyTabs()}
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default NavigationScreen;
