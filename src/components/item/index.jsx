import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native';
import {styles} from './styles';

const Item = ({title, onDelete, onCheck, isReady, imgCheck, imgDelete}) => {
  return (
    <View style={isReady ? [styles.item, styles.itemReady] : styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
      <TouchableOpacity onPress={onCheck}>
        <Image
            style={styles.icon}
            source={imgCheck}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={{marginLeft: 3}}>
        <Image
            style={styles.icon}
            source={imgDelete}
          />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Item;
