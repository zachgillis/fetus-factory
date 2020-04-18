import React, { Component, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonImg, IonCardSubtitle, IonFabButton, IonFab, IonButtons, IonModal } from '@ionic/react';
import './Tab1.css';
import { image, imageOutline, checkmark } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';



class FinalImg extends Component {



  render() {

    

    return (
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        Image Here
                    </IonCardTitle>
                    <IonCardSubtitle>
                        Your Bebe
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    Yum
                </IonCardContent>
            </IonCard>
        </IonContent>
    );
  };
}

export default FinalImg;