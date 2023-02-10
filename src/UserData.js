import { View, Text } from 'react-native'
import React from 'react'
import Login from './Login';

const UserData = ({route, navigation}) => {
   const {myName} = route.params;
  return (
    <View>
   const {myName} = route.params;
      <Text>Welcome {myName}</Text>
      <button title="Go Back" onPress={()=>navigation.goBack()} />
    </View>
  )
}

export default UserData