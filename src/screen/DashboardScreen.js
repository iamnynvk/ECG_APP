import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import images from '../constants/images';
import {SIZES} from '../constants/theme';
import {en} from '../localization/en';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Top */}
      <View style={styles.headerTopView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerText}>{en.dashboard.dashboard}</Text>

          {/* Name & Profile  */}
          <View style={styles.profileView}>
            <View style={styles.imageView}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
                }}
                style={styles.images}
              />
            </View>
            <View style={styles.textView}>
              <View style={styles.greetingView}>
                <Text style={styles.greetingText}>{en.dashboard.welcome}</Text>
              </View>

              <View style={styles.profileNameView}>
                <Text style={styles.profileText}>{en.dashboard.username}</Text>
              </View>
            </View>
          </View>

          {/* BPM & Heart */}
          <View style={styles.bpmView}>
            <View>
              <Image source={images.heart} style={styles.imageSet} />
            </View>

            <View>
              <Text style={styles.bpmText}>60 {en.dashboard.bpmaverage}</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Dashboard content here.... */}
      <View style={styles.loginView}>
        <View style={styles.innerView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.indicatorMainView}>
              <View style={styles.indicatorView}>
                {/* image icons */}
                <View>
                  <FontAwesome
                    icon="fa-thin fa-battery-bolt"
                    size={SIZES.base * 3.5}
                  />
                </View>

                {/* indicator text */}
                <View>
                  <Text>Battery</Text>
                  <Text>80%</Text>
                </View>
              </View>
              <View style={styles.indicatorView}>
                {/* image icons */}
                <View>
                  <FontAwesome5 name="bluetooth" size={SIZES.base * 3.5} />
                </View>

                {/* indicator text */}
                <View>
                  <Text>Device</Text>
                  <Text>Connected</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#534284',
  },
  innerView: {
    marginHorizontal: SIZES.base + '%',
    marginVertical: SIZES.base + '%',
  },
  headerTopView: {
    flex: 1,
  },
  headerText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: SIZES.height * 0.01,
    fontFamily: 'OpenSans-Bold',
    fontSize: SIZES.width * 0.05,
  },
  loginView: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: SIZES.padding,
    borderTopRightRadius: SIZES.padding,
  },
  profileView: {
    flexDirection: 'row',
    marginHorizontal: SIZES.base + '%',
    marginTop: SIZES.height * 0.04,
  },
  imageView: {
    height: SIZES.height * 0.14,
    width: SIZES.height * 0.14,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
    borderRadius: (SIZES.height * 0.14) / 2,
  },
  images: {
    height: SIZES.height * 0.14,
    width: SIZES.height * 0.14,
    alignSelf: 'center',
    borderRadius: (SIZES.height * 0.14) / 2,
  },
  textView: {
    flex: 2,
    marginLeft: 10,
  },
  greetingView: {
    marginTop: SIZES.height * 0.02,
  },
  greetingText: {
    color: 'white',
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.height * 0.025,
  },
  profileNameView: {
    marginTop: SIZES.height * 0.008,
  },
  profileText: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: SIZES.width * 0.05,
  },
  bpmView: {
    flex: 1,
    alignSelf: 'center',
  },
  imageSet: {
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    alignSelf: 'center',
  },
  bpmText: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: SIZES.width * 0.04,
  },
  indicatorMainView: {
    flex: 1,
    flexDirection: 'row',
  },
  indicatorView: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default DashboardScreen;
