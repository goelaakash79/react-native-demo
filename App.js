import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
// import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
    {id: 5, text: 'Butter'},
  ]);

  const deleteItem = (id) => {
    // setItems((prevItems) => {
    //   return prevItems.filter((item) => item.id !== id);
    // });
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = (text) => {
    console.log(text);
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems([...items, {id: Math.random(0, 100), text}]);
    }
    // setItems((prevItems) => {
    //   return [{uuid, text}, ...prevItems];
    // });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem key={item.id} item={item} deleteItem={deleteItem} />
        )}
      />
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // text: {
  //   color: 'darkslateblue',
  //   fontSize: 28,
  // },
  // img: {width: 100, height: 100, borderRadius: 100 / 2},
});

export default App;
