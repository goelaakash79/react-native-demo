import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 16,
    backgroundColor: 'darkslateblue',
  },
  text: {
    fontFamily: 'Sen',
    color: '#fff',
    fontSize: 24,
    // fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;
