import React, { Component, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonImg, IonCardSubtitle, IonFabButton, IonFab, IonButtons, IonModal, IonFabList } from '@ionic/react';
import './Tab1.css';
import { image, imageOutline, checkmark, share, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


import CreateTab from './CreateTab';

import FinalImg from './FinalImg';

export const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (

  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Create</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Create</IonTitle>
        </IonToolbar>
      </IonHeader>

    
      <CreateTab></CreateTab>



      <IonFab vertical="bottom" horizontal="start">
        <IonButton expand="block" onClick={() => setShowModal(true)}>
          <IonIcon icon={checkmark} slot="start"/>
            Create Child
        </IonButton>
      </IonFab>

      <IonModal 
        isOpen={showModal} 
        swipeToClose={true}
        onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Your Child</IonTitle>

            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                Done
              </IonButton>
            </IonButtons>

          </IonToolbar>

          

        </IonHeader>
        <IonContent className="ion-padding">
          

        <FinalImg></FinalImg>

        <script>



        </script>
        
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={logoFacebook} /></IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton><IonIcon icon={logoInstagram} /></IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
          </IonFabList>
        </IonFab>

        </IonContent>
      </IonModal>

    
    </IonContent>

    </IonPage>
  );
};

export default Tab1;