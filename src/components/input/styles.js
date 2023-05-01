import { StyleSheet } from "react-native"
import { theme } from './../../constants';

export const styles = StyleSheet.create({
    agregarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    textInputAgregar:{
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 1,
        width: '70%',
        color: theme.colors.text,
    },
})