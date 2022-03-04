import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SIZES} from '../constants/theme';

const Header = ({backIcon, headerName, sideIcon, backAction, sideAction}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backView} onPress={backAction}>
        <FontAwesome5
          name={backIcon}
          size={SIZES.base * 3}
          style={styles.icon}
          color="#0a090b"
        />
      </TouchableOpacity>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerName}>{headerName}</Text>
      </View>
      <TouchableOpacity style={styles.sideView} onPress={sideAction}>
        <FontAwesome5
          name={sideIcon}
          size={SIZES.base * 3}
          style={styles.icon}
          color="#0a090b"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: SIZES.base * 8,
    alignItems: 'center',
  },
  backView: {
    flex: 0.1,
    alignItems: 'center',
    marginStart: SIZES.base * 2,
  },
  headerTitleView: {
    flex: 1,
    marginHorizontal: SIZES.base * 3,
  },
  headerName: {
    fontFamily: 'OpenSans-Bold',
    color: '#1b1a21',
    fontSize: SIZES.base * 2.5,
  },
  sideView: {
    flex: 0.1,
    alignItems: 'center',
    marginEnd: SIZES.base * 2,
  },
});

export default Header;
