import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>How It Works</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Fetus Factory uses a generative adversarial neural network to create the image of the baby.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Privacy</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            The photo is rendered directly on your device. All your content remains local.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Contact</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Created by Zach Gillis (zachgillis@icloud.com), Edwin Ing (sexiboi@gmail.com), and Hoon Shin (bobmanual@gmail.com).
            Please contact us if you have any questions.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Eat Cheerios</IonCardTitle>
            <IonCardSubtitle>Sponsored Content</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Eat cheerios. The only proven COVID-19 cure.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
