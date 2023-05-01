import React from 'react'
import { View, TextInput, Button } from 'react-native';
import {styles} from './styles';

const Input = ({placeholder, textValue, onChangeText, placeholderTextColor, buttonColor, buttonTitle, onPress}) => {
  return (
    <View style={styles.agregarContainer}>
        <TextInput onChangeText={onChangeText} value={textValue} placeholder={placeholder} placeholderTextColor={placeholderTextColor} style={styles.textInputAgregar}/>
        <Button title={buttonTitle} color={buttonColor} onPress={onPress}/>
    </View>
  )
}

export default Input;
