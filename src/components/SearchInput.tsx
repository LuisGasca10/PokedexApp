import { StyleSheet, Text, View, TextInput, Platform, StyleProp, ViewStyle } from 'react-native';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import useDebounceValue from '../hooks/useDebounceValue';
interface Props {
    style?: StyleProp<ViewStyle>
    onDebaunce: (value: string) => void
}
const SearchInput = ({ style, onDebaunce }: Props) => {

    const [txtValue, setTxtValue] = useState('')
    const debounceValue = useDebounceValue(txtValue, 500);

    useEffect(() => {
        onDebaunce(debounceValue);

    }, [debounceValue])


    return (
        <View style={{
            ...styles.conatiner,
            ...style as any
        }} >
            <View style={styles.txtBackground}>
                <TextInput
                    placeholder='Buscar pokémon'
                    style={{
                        ...styles.txtInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={txtValue}
                    onChangeText={setTxtValue}
                />

                <Icon
                    name='search-outline'
                    color={'grey'}
                    size={25}
                />
            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    conatiner: {
        borderRadius: 16,
        zIndex: 999
    },
    txtBackground: {
        backgroundColor: '#F3F1F3',
        height: 40,
        borderRadius: 16,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txtInput: {
        flex: 1,
        fontSize: 18,
    }
})