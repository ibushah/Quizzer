import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

import Camera from './Components/Camera';
import Main from './Components/Front'
import UpdateCam from './Components/UpdateCam';
export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showCam: false,
      updateCam:false,
      updateImgId:'',
      imgArray:[]
    }

  }

  openCam()
  {
    this.setState({
      showCam:!this.state.showCam
    })
  }

  getImages(url)
  {
    let tempArr=this.state.imgArray;
    let obj={
      url,
      id:Date.now()
  
    }
    console.log(obj)
    tempArr.push(obj);
    this.setState({
      imgArray:tempArr
    })
  }

  delete(id)
  {
    console.log(id)

    let arr=this.state.imgArray;
    console.log(arr)
   let index= arr.findIndex((value)=>
    {
      return value.id===id
    })
    console.log(index,"indexxxxx")
    arr.splice(index,1);
    this.setState({
      imgArray:arr
    })
  }

  update(id)
  {
    let arr=this.state.imgArray;
    console.log(arr)

    
  
    this.setState({
      updateImgId:id,
      updateCam:true
    })

  }

  sendImg(obj)
  {

    let arr=this.state.imgArray;

    let newArr=arr.map((value)=>
    {
      if(value.id===obj.id)
      {
        return obj;
      }
      else
      {
        return value;
      }
    })

    this.setState({
      imgArray:newArr,
      updateCam:false
    })
  }



  render() {
    return (
      <View style={styles.container}>
        {this.state.showCam && !this.state.updateCam && <Camera getImages={this.state.showCam? this.getImages.bind(this) : [] }  openCam={this.openCam.bind(this)}/>}
        {!this.state.showCam && !this.state.updateCam && <Main  update={this.update.bind(this)} delete={this.delete.bind(this)} imgArray={this.state.imgArray} openCam={this.openCam.bind(this)} />}
        {this.state.updateCam && <UpdateCam sendImg={this.sendImg.bind(this)} updateImgId={this.state.updateImgId} />}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
