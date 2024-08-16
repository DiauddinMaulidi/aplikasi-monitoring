import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FirstPage = ({ navigation }) => {
    return (
        <ImageBackground source={require('../public/bg.jpg')}>
            <View className="backdrop-opacity-95 backdrop-invert bg-white/10 h-full">
                <View className="m-3 flex justify-center items-center">
                    <Image source={require('../public/iconDepan.jpg')} className="w-full h-[420px] rounded-3xl mb-5" />
                    <Text className="text-white text-2xl py-3">Welcome to The World</Text>
                    <Text className="text-white">the world is yours</Text>
                </View>
                <View>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['red', 'yellow', 'green']} className="mt-10 rounded-xl mx-5 p-[2px]">
                        <View className="bg-blue-500 flex flex-row rounded-xl">
                            <TouchableOpacity className="w-40 p-4 active:rounded-xl">
                                <Text className="text-white text-center">Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} className="p-4 active:rounded-xl flex-1">
                                <Text className="text-white text-center">Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground >
    )
}

export default FirstPage
