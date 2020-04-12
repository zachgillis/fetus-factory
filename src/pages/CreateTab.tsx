import React, { Component, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonImg, IonCardSubtitle, IonFabButton, IonFab, IonButtons, IonModal } from '@ionic/react';
import './Tab1.css';
import { image, imageOutline, checkmark } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

const { Camera } = Plugins;

const INITIAL_STATE = {
  photo1: '',
  photo2: '',
  
};

class CreateTab extends Component {

  state: any = {};
  props: any = {};
  
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
    defineCustomElements(window);
    
  }
  async takePicture1() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.setState({
      photo1: imageUrl
    })
  }
  async takePicture2() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.setState({
      photo2: imageUrl
    })
  }


  render() {
    const { photo1, photo2 } = this.state;
    

    return (
        <IonContent>
          <IonCard style={{ 'minHeight': '30%' }}>
            <IonCardHeader>
              <IonCardTitle>
                Parent 1
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Choose a photo for Parent 1.
              <br></br>
              <IonButton slot="end" onClick={() => this.takePicture1()}>
                  <IonIcon icon={image} slot="start" />
                  Upload
              </IonButton>
              <IonImg style={{ 'maxWidth': '500px' }} src={photo1} ></IonImg>
            </IonCardContent>
          </IonCard>

          <IonCard style= {{ 'minHeight': '30%' }}>
            <IonCardHeader>
              <IonCardTitle>
                Parent 2
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Choose a photo for Parent 2.
              <br></br>
              <IonButton slot="end" onClick={() => this.takePicture2()}>
                  <IonIcon icon={image} slot="start" />
                  Upload
              </IonButton>
              <IonImg style={{ 'maxWidth': '500px' }} src={photo2} ></IonImg>
            </IonCardContent>
          </IonCard>
        </IonContent>
    );
  };
}

export default CreateTab;