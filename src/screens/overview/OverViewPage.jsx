import React from 'react'
import { Text, View } from 'react-native'
import color from '../../theme/color'

function OverViewPage() {
  const appColors = color();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 16, color: appColors.black, fontWeight: 700}}>
            OverView Page !
        </Text>
    </View>
  )
}

export default OverViewPage