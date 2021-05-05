import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Services: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard className="card-color-white">
          <IonCardHeader>
            <IonCardTitle className="card-title-white">Services</IonCardTitle>
          </IonCardHeader>
          <p>
            Listed below are the services we provide. We strive for quick, fast service. Contact us for pricing information.
          </p>
        </IonCard>
        <IonList>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Tires</IonLabel>
            </IonItemDivider>
            <IonItem>
                Any brand of tire at unbeatable prices
            </IonItem>
            <IonItem>
                Tire Rotation and Balance
            </IonItem>
            <IonItem>
                Tire Repair
            </IonItem>
            <IonItem>
                Wheel Balance
            </IonItem>
            <IonItem>
                New and used tires
            </IonItem>
            <IonItem>
                Mounting and balancing included free with tire purchase!
            </IonItem>
          </IonItemGroup>
          <br/>

          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>General Automotive</IonLabel>
            </IonItemDivider>
            <IonItem>
                Brakes
            </IonItem>
            <IonItem>
                Computerized Laser Alignments
            </IonItem>
            <IonItem>
                Suspension Repair
            </IonItem>
            <IonItem>
                Shocks and Struts
            </IonItem>
            <IonItem>
                Other minor vehicle repairs
            </IonItem>
          </IonItemGroup>
          <br />

          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Oil Changes</IonLabel>
            </IonItemDivider>
            <IonItem>
                Mobil Synthetic Blend
            </IonItem>
            <IonItem>
                Mobil One Full Synthetic
            </IonItem>
          </IonItemGroup>
          <br/>

          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Inspection Services</IonLabel>
            </IonItemDivider>
            <IonItem>
                Emissions State Inspection
            </IonItem>
            <IonItem>
                Safety State Inspection
            </IonItem>
          </IonItemGroup>          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Services;
