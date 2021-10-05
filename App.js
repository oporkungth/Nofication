import React, { useEffect } from 'react'
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging'

import {View,Text} from 'react-native'
const App = () => {

useEffect(()=>{
messaging().getToken(firebase.app().options.messagingSenderId).then((token)=>{
  console.log('token',token)
})
},[])
return(
  <View>
    <Text>
    Gazeguard
      </Text>
  </View>
)
}

export default App