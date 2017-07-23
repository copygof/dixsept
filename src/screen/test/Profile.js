import React, { Component } from 'react'
import { ActivityIndicator, TouchableNativeFeedback, Image, Text, StyleSheet, View, Animated, ScrollView, Dimensions, ListView, PanResponder } from 'react-native';
import Interactable from 'react-native-interactable'
import ScrollableTabView, { DefaultTabBar  } from 'react-native-scrollable-tab-view'
var CustomTabBar = require('./CustomTabBar');

const { width } = Dimensions.get('window')

const Screen = {
  height: Dimensions.get('window').height - 75
}

class List extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const data = ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6']
    this.state = {
      data,
      dataSource: this.ds.cloneWithRows(data),
      loading: false
    };
  }
  onEndReached() {
    console.log('onEndReached')
    this.setState({ loading: true })
    const index = this.state.data.length
    const data = this.state.data.concat(['row' +( index + 1) , 'row' + (index + 2)])
    this.setState({
      loading: false,
      dataSource: this.ds.cloneWithRows(data),
      data
    })
     
  }
  render() {
    return (
      <ListView
        onScroll={this.props.onScroll}
        scrollEnabled={this.props.scrollEnabled}
        dataSource={this.state.dataSource}
        renderRow={(rowData, i) => (
          <View key={'key'+ i} style={{ height: 200, marginHorizontal: 15, marginVertical: 20, backgroundColor: 'pink' }}>
            <Text>{rowData}</Text>
          </View>
        )}
        renderFooter={() =><Text>{'rowData'}</Text>}
        onEndReached={() => this.onEndReached()}
        onEndReachedThreshold={80}
      />
    );
  }
}


export default class CollapsingHeaderWithScroll extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
    this.state = {
      canScroll: false
    };
  }
  componentWillMount () {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={{  }}>
             <Animated.Text
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  zIndex: 99,
                  height: 22,
                  fontSize: 16,
                  color: '#ffffff',
                  opacity: this._deltaY.interpolate({
                    inputRange: [-232, -180, 0],
                    outputRange: [1, 0.4, 0], 
                    extrapolate: 'clamp'
                  })
                }}>
                Preecha Sattabut
              </Animated.Text>
            <Interactable.View
              verticalOnly={true}
              snapPoints={[{y: 0, id: 'top'}, {y: -230, id: 'bottom'}]}
              boundaries={{top: -230, bottom: 0}}
              onSnap={this.onSnap.bind(this)}
              animatedValueY={this._deltaY}>
            <Animated.View
              style={{
                  height: Dimensions.get('window').height + 232,
                  backgroundColor: this._deltaY.interpolate({
                    inputRange: [-232,  -100, 0],
                    outputRange: ['#e43a2c', '#ffffff', '#ffffff'], 
                    extrapolate: 'clamp'
                  }),
                }}>
              
              <Animated.View
                style={{
                  
                  backgroundColor: this._deltaY.interpolate({
                        inputRange: [-232,  -100, 0],
                        outputRange: ['#e43a2c', '#ffffff', '#ffffff'], 
                        extrapolate: 'clamp'
                      }),
                }}
                >
                <Animated.Image
                  style={{
                    
                    height: 180,
                    width: null,
                    resizeMode: "cover"
                  }}
                  source={require('./imageBanner.jpg')} />
                  <Animated.View
                    style={{
                      
                      backgroundColor: this._deltaY.interpolate({
                        inputRange: [-232,  -100, 0],
                        outputRange: ['#e43a2c', '#ffffff', '#ffffff'], 
                        extrapolate: 'clamp'
                      }),
                      }}>
                    <Animated.View
                      style={{
                        opacity: this._deltaY.interpolate({
                          inputRange: [-232,  -100, 0],
                          outputRange: [0, 0.8, 1], 
                          extrapolate: 'clamp'
                        }),
                         alignItems: 'center', paddingHorizontal: 15, width, height: 72, flexDirection: 'row'
                      }}
                      >
                      <View style={{ width: 61, height: 61, backgroundColor: '#dfdfdf', borderRadius: 61 }} />
                      <Text style={{ flex: 1, height: 61, marginHorizontal: 19 }}>
                        My Profile
                      </Text>
                    </Animated.View>
                  </Animated.View>
              </Animated.View>
              <ScrollableTabView
                 renderTabBar={() => (
                     <DefaultTabBar someProp={'here'} />
                 )}                
                >
                <ScrollView
                  
                    {...this._panResponder.panHandlers}
                  tabLabel="Profile"
                  bounces={false}
                  canCancelContentTouches={this.state.canScroll}
                  scrollEnabled={this.state.canScroll}
                  onScroll={this.onScroll.bind(this)}
                  style={{left: 0, right: 0, height: Dimensions.get('window').height, backgroundColor: '#e0e0e0'}}
                  >
                  <View style={styles.placeholder} />
                    <View style={styles.placeholder} />
                    <View style={styles.placeholder} />
                    <View style={styles.placeholder} />
                    <View style={styles.placeholder} />
                    <View style={styles.placeholder} />
                    <View style={styles.placeholder} />
                </ScrollView>
                <View tabLabel="ListView" style={{ flex: 1, backgroundColor: '#ffffff' }} >
                  <List
                    scrollEnabled={this.state.canScroll}
                    onScroll={this.onScroll.bind(this)}
                  />
                </View>
                <View tabLabel="View" style={{ flex: 1, backgroundColor: '#ffffff' }} />
              </ScrollableTabView>
            </Animated.View>
          </Interactable.View>
          </View>
      </View>
    );
  }
  onSnap(event) {
    const { id } = event.nativeEvent;
    if (id === 'bottom') {
      this.setState({ canScroll: true });
      // alert('This implementation is still broken, in progress');
    }
     if (id === 'top') {
      this.setState({ canScroll: false });
      // alert('This implementation is still broken, in progress');
    }
  }
  onScroll(event) {
    const { contentOffset } = event.nativeEvent;
    if (contentOffset.y === 0) {
      this.setState({ canScroll: false });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  placeholder: {
    backgroundColor: 'yellow',
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginTop: 20
  }
});
{/*,
<Animated.Image
              style={{
                // height: 250 - 72,
                top: 0,
                transform: [
                {
                  translateY: this._deltaY.interpolate({
                     inputRange: [-150, 0],
                     outputRange: [-50, 0], 
                     extrapolate: 'clamp'
                  })
                }, ],
                height: 250,
                width: null,
                resizeMode: "cover"
              }}
              source={require('./imageBanner.jpg')} />*/}


/**
 * <Animated.View style={{
               backgroundColor: 'red',
              // height: 150,
              transform: [
                {
                  translateY: this._deltaY.interpolate({
                    inputRange: [-250, 0, ],
                    outputRange: [-250, 0,]
                  })
                },
              ]
            }}>
              <View style={{ width, height: 72, backgroundColor: '#ffffff', flexDirection: 'row' }}>
                <View style={{ width: 61, height: 61, backgroundColor: '#dfdfdf', borderRadius: 61 }} />
                <Text>
                  My Profile
                </Text>
              </View>
            </Animated.View>
 */