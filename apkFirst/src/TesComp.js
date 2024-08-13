import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { TailwindProvider } from 'nativewind';

const TesComp = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [isTrue, setIstrue] = useState(false)
  const [displayName, setDisplayName] = useState('')

  const halHome = () => {
    // return navigation.navigate('Home', { name: 'Home' })
    return navigation.navigate('Home', { username });
  }

  const login = () => {
    fetch('http://11.16.16.129:8000/data')
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
    <ScrollView className="backdrop-blur-xl bg-white/30">
      <View >
        <Text>Form Login</Text>
        <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }} />
      </View>
      <View>
        <Text>Username: </Text>
        <TextInput placeholder="Masukkan username" value={username} onChangeText={setUsername} />
      </View>
      <View >
        <Text>Password: </Text>
        <TextInput placeholder="Masukkan Password" secureTextEntry={true} value={pass} onChangeText={setPass} />
      </View>
      <View>
        <TouchableOpacity >
          <Text>kirim</Text>
        </TouchableOpacity>
      </View>

      {/* {isTrue && <Text>Selamat datang: {displayName}</Text>} */}
    </ScrollView>
  )
}


export default TesComp
