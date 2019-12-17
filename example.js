import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Barcode, Formats } from 'react-native-1d-barcodes';

let ScreenWdith= Dimensions.get("window").width;
let ScreenHeight= Dimensions.get("window").height;

export default class BarcodeView extends Component {
  constructor(props) {
    super(props);

    this.state= {
      barCodeValue: '01234567890',
      showBarcodeValue:false
    }
  }

  render() {
    let {barCodeValue} = this.state;

    let barCodeValueShow = '';
    if(this.state.showBarcodeValue){
      barCodeValueShow = barCodeValue;
    }
    else{
      barCodeValueShow = '********'+barCodeValue.substring(barCodeValue.length-4);
    }
    return (
      <View style={styles.main_container}>

        <View style={styles.body_container}>
          <View>
            <View style={styles.bar_container}>
              <Barcode
                bgColor={'rgb(248, 248, 248)'}
                fgColor={'#000000'}
                format={Formats.UPC_A}
                value={this.state.barCodeValue}
                width={styles.bar_container.width}
                height={styles.bar_container.height}
                style={{height:styles.bar_container.height,width:styles.bar_container.width}}
              />
              <View style={styles.bar_txt_container}>
                <Text style={styles.bar_txt}>{barCodeValueShow}</Text>
                <TouchableOpacity onPress={()=>{
                  this.setState({showBarcodeValue:!this.state.showBarcodeValue})
                }} activeOpacity={0.6} style={{marginLeft:31}}>
                  <Text style={[styles.bar_txt]}>顯示</Text>
                </TouchableOpacity>
              </View>   
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    width:ScreenWdith,
    height:ScreenHeight,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(248, 248, 248)',
  },
 
  body_container:{
    flexDirection: 'column',
    alignItems: 'center',
    width:ScreenWdith,
    height:'100%',
    justifyContent:'center',
    paddingBottom:'40%'
  },
  bar_container:{
    backgroundColor:'black',
    width:ScreenWdith/1.3,
    height:58,
  },
  bar_txt_container:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:18,
    marginBottom:14
  },
  bar_txt:{
    fontFamily:'HiraKakuPro-W3',
    fontSize:12,
    color:'rgb(74, 74, 74)',
    lineHeight:12,
  },
});