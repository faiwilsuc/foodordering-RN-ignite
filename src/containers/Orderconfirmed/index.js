import { Platform, TextInput, Image, findNodeHandle, View, ListView, TouchableOpacity, ScrollView, Alert, Switch } from 'react-native';
import DialogBox from 'react-native-dialogbox';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Text, Button , Form, Item, Input, Label, Segment} from 'native-base';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';
import SudokuGrid from 'react-native-smart-sudoku-grid';
import Modal from 'react-native-simple-modal';

import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';
import { setDetail } from '@actions/globals';


import { Metrics, Styles, Images, Colors } from '@theme/';
import styles from './styles';

import homeData from '../../dummy/homeData.json';
import Global from '@src/Global';

class Orderconfirmed extends Component {
  constructor(props) {
    super(props);
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  
  handleDialog = () => {
		// alert
		// this.dialogbox.alert(1);
    this.dialogbox.confirm({
			title: 'Cancel my order',
			content: ['Are you sure you want to cancel your order?'],
			ok: {
				text: 'YES',
				callback: () => {
					this.pushNewRoute('tabhome');
				},
			},
			cancel: {
				text: 'NO',
			},
		});
	}

  render() {
    return (
      <View style={[Styles.fullScreen, {backgroundColor:'white'}]}> 
        <View style={[styles.headerView, {backgroundColor: Colors.brandPrimary, flexDirection:'row'}]}>
          <TouchableOpacity onPress={() => this.props.popRoute()}>
          <Icon
              style={{fontSize: 20, color: Colors.textSecondary, marginLeft:20}}
              containerStyle={Styles.center}
              color={Colors.textPrimary}
              name={'arrow-left'}/>
          </TouchableOpacity>
          <Text style={{flex:1, color:'white', fontSize:15, marginLeft:20}}> Add payment </Text>
        </View>
        <ScrollView>
            <View style={[Styles.center, {margin:Metrics.screenHeight * 0.05}]}>
                <Text style={{fontSize: Metrics.footerHeight * 0.4}}>Congrats!</Text>
                <Image source={Images.qr_stub} style={{ width: Metrics.screenWidth * 0.6, height: Metrics.screenWidth * 0.6, margin: 15,}}/>
                <Text style={{margin:5}}>-------------- Or --------------</Text>
                <Text style={{margin:15}}>ORDER # 1491328422508</Text>
            </View>
            
            <DialogBox ref={(dialogbox) => { this.dialogbox = dialogbox }}/>
            
        </ScrollView>
        <View style={[Styles.center, {marginTop: Metrics.screenHeight * 0.16}]}>
        <TouchableOpacity  onPress={this.handleDialog} style={[Styles.center, { backgroundColor: Colors.brandPrimary, width: Metrics.screenWidth * 0.6, height: Metrics.footerHeight * 0.6, marginTop: Metrics.footerHeight * 0.15, marginBottom: Metrics.footerHeight * 0.5, borderRadius: 5}]}>
            <Text style={{ fontSize: Metrics.footerHeight * 0.3, color: 'white'}}>CANCEL MY ORDER</Text>
        </TouchableOpacity>
        </View>
     </View> 
    );
  }
}

Orderconfirmed.propTypes = {
  replaceRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  setDetail: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: () => dispatch(popRoute()),
    setDetail: status => dispatch(setDetail(status)),
  };
}
function mapStateToProps(state) {
  return { 
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Orderconfirmed);
