import {Image, Text, View} from 'react-native';
import color from '../theme/color';

const ProductCard = ({item}) => {
  const appColors = color();
  return (
    <View
      key={item.id}
      style={{
        alignItems: 'center', // Center align the contents
        margin: 10,
        width: 90,
        height: 150,
      }}>
      <View
        style={{
          borderWidth: 2,
          borderColor: appColors.imageBorder,
          borderRadius: 15,
          padding: 5,
          backgroundColor: appColors.white,
        }}>
        {item?.thumbnail ? (
          <Image
            style={{width: 65, height: 80, resizeMode: 'cover'}}
            source={{uri: item?.thumbnail}}
          />
        ) : (
          <Text>Image not available</Text>
        )}
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: 12, // Font size of the text
            fontWeight: 'bold', // Bold text
            color: appColors.darkGray, // Dark grey text color
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
