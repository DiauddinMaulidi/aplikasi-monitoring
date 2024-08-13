import React from 'react'
import { View, Text } from 'react-native'

function Home({ route }) {
    const { username } = route.params
    return (
        <View>
            <Text style={{ color: 'black' }}>Welcome {username}</Text>
        </View>
    )
}

export default Home
