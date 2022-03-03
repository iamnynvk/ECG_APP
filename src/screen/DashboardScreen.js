import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SIZES} from '../constants/theme';
import {en} from '../localization/en';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import SectionOption from '../components/SectionOption';
import SubmitButton from '../components/SubmitButton';
import {NAVIGATION} from '../constants/navigation';
import useOrientation from '../hooks/useOrientation';

const DashboardScreen = ({navigation}) => {
  // using hooks to get the orientation of the device
  const orientation = useOrientation();

  console.log('orientation >>>> ', orientation);

  const isPortrait = orientation.isPortrait;
  console.log(isPortrait);

  return (
    <View
      style={[
        styles.container,
        {flexDirection: isPortrait ? 'column' : 'row'},
      ]}>
      {/* Header Top */}
      <View style={styles.headerTopView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerText}>{en.dashboard.dashboard}</Text>

          {/* Name & Profile  */}
          <View
            style={[
              styles.profileView,
              {
                flexDirection: isPortrait ? 'row' : 'column',
                alignItems: isPortrait ? 'center' : 'center',
              },
            ]}>
            <View style={[styles.imageView, {}]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
                }}
                style={[styles.images]}
              />
            </View>
            <View
              style={[
                styles.textView,
                {alignItems: isPortrait ? 'flex-start' : 'center'},
              ]}>
              <View style={styles.greetingView}>
                <Text style={styles.greetingText}>{en.dashboard.welcome}</Text>
              </View>

              <View style={styles.profileNameView}>
                <Text style={styles.profileText}>{en.dashboard.username}</Text>
              </View>
            </View>
          </View>

          {/* BPM & Heart */}
          <View
            style={[
              styles.bpmView,
              {marginTop: isPortrait ? 0 : SIZES.base * 4},
            ]}>
            <View>
              <FontAwesome5
                name="heart"
                solid
                size={40}
                style={styles.imageSet}
                color="#ff5737"
              />
            </View>

            <View style={styles.bpmTextView}>
              <Text style={styles.bpmText}>60 {en.dashboard.bpmaverage}</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Dashboard content here.... */}
      <View
        style={[
          styles.loginView,
          {
            borderTopRightRadius: isPortrait ? SIZES.padding : 0,
            borderBottomLeftRadius: isPortrait ? 0 : SIZES.padding,
          },
        ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.indicatorMainView}>
                <TouchableOpacity
                  style={styles.indicatorView}
                  onPress={() => console.log('Battery Indicator')}>
                  {/* image icons */}
                  <View style={styles.iconView}>
                    <FontAwesome5
                      name="battery-half"
                      size={SIZES.base * 3}
                      style={styles.batteryIcon}
                    />
                  </View>

                  {/* indicator text */}
                  <View style={styles.indicatorTextView}>
                    <Text style={styles.indicatorText}>
                      {en.dashboard.battery}
                    </Text>
                    <Text style={styles.indicatorSubText}>
                      {en.dashboard.percentage}
                    </Text>
                  </View>
                </TouchableOpacity>

                <Divider
                  width={1}
                  color="#898b96"
                  style={{
                    borderLeftWidth: 0.2,
                    borderColor: '#898b96',
                    marginVertical: SIZES.base * 1,
                  }}
                />
                <TouchableOpacity
                  style={styles.indicatorView}
                  onPress={() => console.log('Device Indicator')}>
                  {/* image icons */}
                  <View style={styles.iconView}>
                    <FontAwesome5
                      name="bluetooth"
                      size={SIZES.base * 3}
                      style={styles.blutoothIcon}
                    />
                  </View>

                  {/* indicator text */}
                  <View style={styles.indicatorTextView}>
                    <Text style={styles.indicatorText}>
                      {en.dashboard.device}
                    </Text>
                    <Text style={styles.indicatorSubText}>
                      {en.dashboard.connected}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          {/* dashboard Note Part */}
          <View style={styles.textNoteView}>
            <Text style={styles.textNote}>{en.dashboard.note}</Text>
          </View>

          {/* dashboar OPtions Part*/}
          {/* History */}
          <SectionOption
            iconType="history"
            option={en.dashboard.history}
            goIcon="chevron-right"
            onPress={() => navigation.navigate(NAVIGATION.RECORD)}
          />

          {/* userguide */}
          <SectionOption
            iconType="medapps"
            option={en.dashboard.userguide}
            goIcon="chevron-right"
            onPress={() => console.log('Go to User Guide')}
          />

          {/* Profile */}
          <SectionOption
            iconType="user-tie"
            option={en.dashboard.profile}
            goIcon="chevron-right"
            onPress={() => navigation.navigate(NAVIGATION.PROFILE)}
          />
        </ScrollView>

        {/* View Live Button */}
        <View style={styles.liveButtonView}>
          <SubmitButton
            title={en.dashboard.viewlive}
            onPress={() => console.log('Go to Live')}
          />
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
  },
  profileView: {
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
    borderWidth: 2,
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
    fontSize: SIZES.height * 0.022,
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
    alignSelf: 'center',
  },
  bpmTextView: {
    marginTop: SIZES.height * 0.01,
  },
  bpmText: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: SIZES.width * 0.04,
  },
  indicatorMainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f7f6f8',
    height: SIZES.height * 0.08,
    borderRadius: 10,
  },
  indicatorView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
  iconView: {
    justifyContent: 'center',
    marginRight: SIZES.width * 0.03,
    marginStart: SIZES.width * 0.03,
  },
  batteryIcon: {
    transform: [{rotate: '270deg'}],
  },
  blutoothIcon: {
    padding: 3,
  },
  indicatorTextView: {},
  indicatorText: {
    color: '#adadb5',
    fontFamily: 'OpenSans-Medium',
  },
  indicatorSubText: {
    color: '#1b1a21',
    fontFamily: 'OpenSans-Regular',
    fontSize: SIZES.width * 0.04,
  },
  textNoteView: {
    marginHorizontal: SIZES.base + '%',
  },
  textNote: {
    color: '#1b1a21',
    fontFamily: 'OpenSans-Medium',
    letterSpacing: 0.5,
  },
  liveButtonView: {
    marginHorizontal: SIZES.base + '%',
    marginVertical: '-5%',
  },
});

export default DashboardScreen;
