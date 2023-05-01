import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080705',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30,
        paddingTop: 30,
        paddingHorizontal: 30
      },
      title:{
        color: '#FFFFFA',
        fontSize: 16,
        fontWeight: 'bold',
      },
      detailContainer: {
        paddingVertical: 20,
      },
      detailMessage: {
        fontSize: 14,
        color: '#fff',
      },
      selectedItem: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
})