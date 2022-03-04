import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import {NAVIGATION} from '../constants/navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {SIZES} from '../constants/theme';
import {en} from '../localization/en';
import {RECORD} from '../data/dummyData';

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
        {/* List of Recoreds */}

        <View>
          {RECORD.map((item, index) => {
            return (
              <View key={index}>
                {/* Save Date */}
                <View style={styles.dateView} key={item.key}>
                  <Text style={styles.textDate}>{item.date}</Text>
                </View>

                <View key={index}>
                  {item.data.map((item, index) => {
                    console.log(item);
                    return (
                      <View key={index}>
                        <TouchableOpacity>
                          <View style={styles.topContainerView}>
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

                            <View style={styles.secendView}>
                              <Text style={styles.firstText}>Heart Beat</Text>
                              <Text style={styles.secendText}>
                                {item.heartRate}
                              </Text>
                            </View>

                            <View style={styles.thirdView}>
                              <Text style={styles.timeText}>
                                {item.currentTime}
                              </Text>
                            </View>
                          </View>

                          <View style={styles.topContainerView}>
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

                            <View style={styles.secendView}>
                              <Text style={styles.secendText}>
                                {item.detail}
                              </Text>
                            </View>
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
                          <Divider
                            style={styles.divider}
                            width={1}
                            borderRadius={10}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
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
    fontSize: SIZES.base * 2,
  },
  topContainerView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: SIZES.base + '%',
    height: SIZES.base * 10,
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
    width: SIZES.base * 5,
    height: SIZES.base * 5,
    borderRadius: (SIZES.base * 5) / 2,
  },
  secendView: {
    flex: 5,
    marginHorizontal: SIZES.base * 1,
  },
  firstText: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.base * 2.2,
  },
  secendText: {
    fontFamily: 'OpenSans-Regular',
    color: '#0a090b',
    fontSize: SIZES.base * 1.8,
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
