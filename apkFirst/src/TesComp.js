import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'

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
    <ScrollView style={{ backgroundColor: '#5B99C2' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 40 }}>Form Login</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ color: 'black' }}>Username: </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={{ margin: 10 }}>
        <Text style={{ color: 'black' }}>Password: </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan Password"
          secureTextEntry={true}
          value={pass}
          onChangeText={setPass}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity style={styles.buttonLogin} onPress={login}>
          <Text style={{ color: 'white', textAlign: 'center' }}>kirim</Text>
        </TouchableOpacity>
      </View>

      {/* {isTrue && <Text>Selamat datang: {displayName}</Text>} */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  hasil: {
    borderWidth: 2,
    margin: 20,
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hasilText: {
    color: 'black',
    fontSize: 50,
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  buttonLogin: {
    backgroundColor: '#1F316F',
    width: 100,
    height: 50,
    justifyContent: 'center',
    borderRadius: 100,
  },
})

export default TesComp
