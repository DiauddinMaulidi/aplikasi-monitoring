import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, TouchableHighlight, Button } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";
import Popup from 'reactjs-popup';

function Home({ route }) {
    const { username } = route.params
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View className="bg-[#0a1f2b] h-full">
            <View className='flex-row px-3 mt-5'>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setModalVisible(true)}>
                    <Image source={require('../../public/iconDepan.jpg')} className='w-20 h-20 rounded-full' />
                </TouchableOpacity>
                <View>
                    <Text className='text-white pl-3 text-[30px]'>alek</Text>
                    <Text className='text-white pl-3'>{"Don't worry about the future, if we believe in GOD".slice(0, 30)}...</Text>
                </View>
            </View>
            <View className='flex-row bg-white items-center rounded-lg pl-3 mx-3 mt-5'>
                <FontAwesome5 name='search' size={20} color='gray' />
                <TextInput placeholder='search your chat' className="bg-white rounded-xl flex-1" />
            </View>
            <Text className="text-white ml-3 mt-3 text-[13px]">RECENTS STATUS</Text>

            <View>
                <Modal isVisible={modalVisible} animationIn={'fadeIn'} animationOut={'fadeOut'}>
                    <View className='bg-[#0071d9] pt-10 mx-5 rounded-lg'>
                        <View className='flex items-center'>
                            <TouchableOpacity className='bg-[#0a1f2b] p-3 rounded-lg' activeOpacity={0.8}>
                                <Text className='text-white'>view profile photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='bg-[#0a1f2b] p-3 mt-3 rounded-lg' activeOpacity={0.8}>
                                <Text className='text-white'>change profile photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='mt-5 bg-[#0a1f2b] p-2 rounded-full' onPress={() => setModalVisible(false)}>
                                <Text className='text-white'>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default Home
