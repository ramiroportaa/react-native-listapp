import { StyleSheet } from "react-native"
import { theme } from './../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30,
        paddingTop: 30,
        paddingHorizontal: 30
      },
      title:{
        color: theme.colors.text,
        fontSize: 16,
        fontWeight: 'bold',
      },
      detailContainer: {
        paddingVertical: 20,
      },
      detailMessage: {
        fontSize: 14,
        color: theme.colors.white,
      },
      selectedItem: {
        fontSize: 14,
        color: theme.colors.white,
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