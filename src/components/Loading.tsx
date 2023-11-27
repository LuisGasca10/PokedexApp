import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={styles.containerIndicator
        }>
            <ActivityIndicator
                size={50}
                color={'grey'}
            />
            <Text style={styles.indicatorTxt}
            >Cargando....</Text>
        </View>
    );
}

export default Loading

const styles = StyleSheet.create({
    containerIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicatorTxt: {
        fontSize: 16
    }
});