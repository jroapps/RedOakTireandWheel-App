import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import logo from '../img/logo.png';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
      <IonCard>
          <IonCardContent>
            <IonImg src={logo} />
            <h1 className="h1-black">
            We are here to serve you and your vehichle's needs.
            </h1>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-color-primary">
          <IonCardHeader>
            <IonCardTitle className="card-title-primary">Tires</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
            We carry a wide assortment of tires. We buy from eight different wholesalers and distributors. If you want it, we can get it or tell you where to find it! Please call or email for pricing and availability.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-color-white">
          <IonCardHeader>
            <IonCardTitle className="card-title-white">Wheels</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
            Whether its American Racing, Wheel Pros, or American Eagle alloys, we offer a wide selection of custom made and original equipment wheels to suit your vehicle. Contact us and we will give you more information on how you can customize your vehicle.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-color-primary">
          <IonCardHeader>
            <IonCardTitle className="card-title-primary">Batteries</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
            We carry the complete line of Interstate Batteries. On average we keep most of the popular applications but we can special order any battery to meet your needs. Contact us with your car's make and model and we can give you pricing information.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="card-color-white">
          <IonCardHeader>
            <IonCardTitle className="card-title-white">Services</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
            In addition to tires, wheels, and batteries, we offer various automotive services. We provide oil changes, state inspections, alignments, shocks, brakes, and more! Click the service tab below to see a list of services we offer.<br/>
            </p>
          </IonCardContent>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
