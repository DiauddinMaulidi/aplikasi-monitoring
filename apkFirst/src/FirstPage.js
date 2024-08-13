import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

const FirstPage = ({ navigation }) => {
    return (
        <View className="backdrop-opacity-95 backdrop-invert bg-white/10 h-full m-3">
            <View>
                <Image source={require('../public/iconDepan.jpg')} className="w-full h-[420px] rounded-3xl" />
            </View>
            <View className="mt-7 flex justify-center items-center">
                <Text className="text-black text-2xl py-3">Welcome to The World</Text>
                <Text className="text-black">the world is yours</Text>
            </View>
            <View className="border-2 border-white flex flex-row mt-10 rounded-xl mx-2">
                <TouchableOpacity className="active:bg-orange-400 w-40 p-4 text-black rounded-xl">
                    <Text className="text-black text-center">register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Form')} className="active:bg-orange-400 p-4 absolute right-0 w-40 text-black rounded-xl">
                    <Text className="text-black text-center">login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FirstPage
