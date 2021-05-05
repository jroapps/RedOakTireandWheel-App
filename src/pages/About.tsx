import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
      <IonCard className="card-color-white">
          <IonCardHeader>
            <IonCardTitle className="card-title-white">About Us</IonCardTitle>
          </IonCardHeader>
          <p>
          Red Oak Tire & Wheel, Inc. opened in January 2001 in Red Oak, TX. Since that time, we have been offering complete lines of new & used tires, custom wheels, batteries, and general automotive services. We strive to place customer service as the goal of our business because without you, we wouldn't be here.
          </p>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
