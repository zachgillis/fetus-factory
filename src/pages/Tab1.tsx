import React, { Component, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonImg, IonCardSubtitle, IonFabButton, IonFab, IonButtons, IonModal } from '@ionic/react';
import './Tab1.css';
import { image, imageOutline, checkmark } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import CreateTab from './CreateTab';

const { Camera } = Plugins;

const INITIAL_STATE = {
  photo1: '',
  photo2: '',
  
};

export const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <CreateTab></CreateTab>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => setShowModal(true)}>
          <IonIcon icon={checkmark} />
        </IonFabButton>
      </IonFab>

      <IonModal isOpen={showModal}>
        <IonHeader>
        <IonToolbar>
          <IonTitle>Your Child</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>The Results</p>
        <IonButton onClick={() => setShowModal(false)}>
          Close
        </IonButton>
      </IonContent>
      </IonModal>

    </IonContent>
  );
};

export default Tab1;