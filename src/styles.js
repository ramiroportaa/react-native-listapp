import { StyleSheet } from 'react-native';
import { theme } from './constants';

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
    listContainer:{
      marginVertical: 16
    },
});