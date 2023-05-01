import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './styles';

const ModalItem = ({buttonColor, onCancel, onDelete, selectedItem}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Detalle</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.selectedItem}>{selectedItem?.title}</Text>
          <Text style={styles.detailMessage}>¿Estas seguro que deseas borrarlo?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='Cancel'
            color={buttonColor}
            onPress={onCancel}
          />
          <Button 
          title='Delete'
          color={buttonColor}
          onPress={() => onDelete(selectedItem?.id)}
          />
        </View>
      </View>
  )
}

export default ModalItem;
