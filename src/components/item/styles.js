import { StyleSheet } from "react-native"
import { theme } from './../../constants';

export const styles = StyleSheet.create({
    item: {
        backgroundColor: theme.colors.red,
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      itemReady:{
        backgroundColor: theme.colors.green,
      },
      title:{
        color: theme.colors.text,
        fontSize: 16,
        fontWeight: 'bold',
      },
      icon:{
        width: 32,
        height: 32,
      },
})