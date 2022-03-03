import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {NAVIGATION} from '../constants/navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {SIZES} from '../constants/theme';
import {en} from '../localization/en';

const ECGRecords = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        backIcon="chevron-left"
        headerName={en.ecgrecord.heading}
        sideIcon="filter"
        backAction={() => navigation.navigate(NAVIGATION.DASHBOARD)}
        sideAction={() => console.log('Side Filter')}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Save Date */}
        <View style={styles.dateView}>
          <Text style={styles.textDate}>{en.ecgrecord.date}</Text>
        </View>

        <TouchableOpacity>
          {/* List of Recoreds */}
          <View>
            {/* there are 3 child view */}
            <View style={styles.topContainerView}>
              {/* first child */}

              <View style={styles.firstView}>
                <View style={styles.firstInnerView}>
                  <FontAwesome5
                    name="heart"
                    solid
                    color="#ee4c6e"
                    size={SIZES.base * 3}
                    style={styles.icon}
                  />
                </View>
              </View>
              {/* secend child */}
              <View style={styles.secendView}>
                <Text style={styles.firstText}>Heart Beat</Text>
                <Text style={styles.secendText}>60 BPM Average</Text>
              </View>
              {/* third child */}
              <View style={styles.thirdView}>
                <Text style={styles.timeText}>08:26</Text>
              </View>
            </View>

            {/* there are 3 child view */}
            <View style={styles.topContainerView}>
              {/* first child */}
              <View style={styles.firstView}>
                <View style={styles.firstInnerView}>
                  <FontAwesome5
                    name="info-circle"
                    solid
                    color="#c75c5c"
                    size={SIZES.base * 3}
                    style={styles.icon}
                  />
                </View>
              </View>
              {/* secend child */}
              <View style={styles.secendView}>
                <Text style={styles.secendText}>{en.ecgrecord.sinus}</Text>
              </View>
              {/* third child */}
              <View style={styles.thirdView}>
                <View style={styles.firstView}>
                  <FontAwesome5
                    name="share"
                    color="#36295c"
                    size={SIZES.base * 3}
                    style={styles.icon}
                  />
                </View>
              </View>
            </View>
            <Divider style={styles.divider} width={1} borderRadius={10} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f9',
  },
  dateView: {
    marginHorizontal: SIZES.base + '%',
    marginVertical: 10,
  },
  textDate: {
    color: '#0a090b',
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.width * 0.04,
  },
  topContainerView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: SIZES.base + '%',
    height: SIZES.height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  firstView: {
    marginHorizontal: SIZES.base * 1,
  },
  firstInnerView: {
    backgroundColor: '#f2f2f9',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.6,
    width: SIZES.width * 0.12,
    borderRadius: 30,
  },

  secendView: {
    flex: 5,
    marginHorizontal: SIZES.base * 1,
  },
  firstText: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.width * 0.04,
  },
  secendText: {
    fontFamily: 'OpenSans-Regular',
    color: '#0a090b',
    fontSize: SIZES.width * 0.035,
  },
  thirdView: {
    flex: 1.5,
    alignItems: 'center',
  },
  timeText: {
    fontFamily: 'OpenSans-Medium',
  },
  divider: {
    marginHorizontal: '10%',
  },
});

export default ECGRecords;
