import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    item: {
        backgroundColor: '#702632',
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
        backgroundColor: 'green',
      },
      title:{
        color: '#FFFFFA',
        fontSize: 16,
        fontWeight: 'bold',
      },
      icon:{
        width: 32,
        height: 32,
      },
})