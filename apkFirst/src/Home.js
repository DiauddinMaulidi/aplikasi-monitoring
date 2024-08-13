import React from 'react'
import { View, Text } from 'react-native'

function Home({ route }) {
    const { username } = route.params
    return (
        <View>
            <Text className="text-green-800">Welcome {username}</Text>
        </View>
    )
}

export default Home
