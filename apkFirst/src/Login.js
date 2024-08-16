import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
// import { TailwindProvider } from 'nativewind';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [isSecure, setIsSecure] = useState(true)

  const halHome = () => {
    return navigation.navigate('Home', { username });
  }
  const halReg = () => {
    return navigation.navigate('FirsPage');
  }

  const login = () => {
    fetch('http://11.16.16.141:8000/data')
      .then((res) => {
        return res.json()
      }).then(results => {
        results.map(result => {
          if (username !== result.username) {
            Alert.alert('masalah bosku', 'Username tidak sesuai')
          } else if (pass !== result.password) {
            Alert.alert('masalah bosku', 'Password tidak sesuai')
          } else {
            halHome()
          }
        })
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  return (
    <ImageBackground source={require('../public/bg.jpg')} className="backdrop-opacity-95 backdrop-invert bg-white/10 h-full">
      <View className="my-16 px-6">
        <Text className="text-white text-center text-3xl">Halloo Bre!</Text>
        <Text className="text-gray-200 text-center text-[20px]">Wellcome back you've been missed!</Text>
        <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }} />
      </View>
      <View className="mx-4">
        <TextInput placeholder="Masukkan username" value={username} onChangeText={setUsername} className="bg-white rounded-xl pl-3 mb-5" />
        <View className="flex-row items-center rounded-lg bg-white">
          <TextInput placeholder="Masukkan Password" secureTextEntry={isSecure} value={pass} onChangeText={setPass} className="bg-white rounded-xl pl-3 flex-1" />
          <TouchableOpacity className="pr-2" onPress={() => setIsSecure(!isSecure)}>
            <FontAwesome5 name={isSecure ? 'eye' : 'eye-slash'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="flex items-end">
          <Text className="text-gray-200 text-right mt-4 w-28" onPress={halReg}>lupa password</Text>
        </View>

        <TouchableHighlight onPress={halHome} underlayColor="transparent">
          <LinearGradient colors={['cyan', '#345beb']} className="p-4 mt-7 rounded-xl">
            <Text className="text-white text-center">Sign In</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>

    </ImageBackground>
  )
}


export default Login
