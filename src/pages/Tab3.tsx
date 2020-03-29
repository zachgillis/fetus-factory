import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonList, IonListHeader, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { personCircleOutline, home, star, mail } from 'ionicons/icons';

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
            <IonCardTitle>Who We Are</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            We are high school students with an interest in machine learning and app development. Please contact us with any quesitons.
            <IonList>
              <IonListHeader>
                Contacts
              </IonListHeader>
            <IonItem>
              <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
              <IonLabel>Zach Gillis</IonLabel>
              <IonButton slot="end" href="mailto:zachgillis@me.com">
                <IonIcon icon={mail} slot="start" />
                Contact
              </IonButton>
            </IonItem>
            <IonItem>
              <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
              <IonLabel>Edwin Ing</IonLabel>
              <IonButton slot="end" href="mailto:FILLL@gmail.com">
                <IonIcon icon={mail} slot="start" />
                Contact
              </IonButton>
            </IonItem>
            <IonItem>
              <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
              <IonLabel>Hoon Shin</IonLabel>
              <IonButton slot="end" href="mailto:FILL@gmail.com">
                <IonIcon icon={mail} slot="start" />
                Contact
              </IonButton>
            </IonItem>
            </IonList>

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
