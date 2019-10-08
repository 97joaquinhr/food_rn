import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange,onTermSubmit}) =>{
    return(
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" style={styles.iconStyles}/>
            <TextInput 
                style={styles.inputStyle}
                placeholder = "Search"
                value = {term}
                autoCorrect = {false}
                autoCapitalize = "none"
                onEndEditing = {onTermSubmit}
                onChangeText = {onTermChange}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:12,
        backgroundColor: '#F0EEEE',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom:10,
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
    },
    iconStyles:{
        fontSize:32,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});
export default SearchBar;