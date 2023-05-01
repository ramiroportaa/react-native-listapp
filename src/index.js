import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Modal } from 'react-native';
import { styles } from './styles';
import { theme } from './constants';

import { Input, Item, ModalItem } from './components';

export default function App() {
  const [itemList, setItemList] = useState([{id: '0.14816516', title: 'Primer item de prueba', isReady: true}]);
  const [valueText, setValueText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const add = ()=>{
    if (!valueText) return console.warn("Campo vacío");
    setItemList([...itemList, {id: Math.random().toString(), title: valueText, isReady:false}]);
    setValueText('');
  }

  const onHandlerModal = (id)=>{
    setModalVisible(true);
    const item = itemList.find(item => item.id === id);
    setSelectedItem(item);
  }

  const onCancel = ()=>{
    setModalVisible(false);
    setSelectedItem(null);
  }

  const onDelete = (id)=>{
    const newList = itemList.filter(item => item.id !== id);
    setItemList(newList);
    setModalVisible(false);
    setSelectedItem(null);
  }

  const onCheck = (id)=>{
    const ModifiedList = itemList.map(item => {
      if (item.id === id){
        item.isReady = !item.isReady;
      }
      return item;
    })
    setItemList(ModifiedList);
    setSelectedItem(null);
  }

  return (
    <View style={styles.container}>
      <Input placeholder='Escriba lo que desea añadir' placeholderTextColor={theme.colors.text} textValue={valueText} onChangeText={(text)=> setValueText(text)}
      buttonColor={theme.colors.secondary} buttonTitle='Agregar' onPress={add}/>

      <View style={styles.listContainer}>
        <FlatList
          data={itemList}
          renderItem={({item}) =><Item title={item.title} onDelete={()=> onHandlerModal(item.id)} onCheck={()=> onCheck(item.id)} isReady={item.isReady} imgCheck={require("./images/check-icon.png")} imgDelete={require("./images/delete-icon.png")}/>}
          keyExtractor={item => item.id}
        />
      </View>

      <Modal visible={modalVisible} animationType='slide'>
        <ModalItem onCancel={onCancel} onDelete={onDelete} selectedItem={selectedItem}/>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}