import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import './Home.css';
import Shop from '../components/Shop';

const address = "501 N. Hwy 342, Red Oak, TX 75154";

const Contact: React.FC = () => {

  const call = () => {
    CallNumber.callNumber("972-617-8810", true)
    .then(res => console.log('Launched dialer!', res))
    .then(err => console.log('Error launching dialer', err));
  }

  const options: LaunchNavigatorOptions = {
    app: LaunchNavigator.APP.USER_SELECT,
    startName: "My Location",
    destinationName: "Red Oak Tire & Wheel",
    transportMode: LaunchNavigator.TRANSPORT_MODE.DRIVING
  }

  const navigate = () => {
    LaunchNavigator.navigate(address, options)
    .then(res => console.log('Launched navigator', res))
    .then(err => console.log('Error launching navigator', err));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
      <IonCard className="card-color-white">
          <IonCardHeader>
            <IonCardTitle className="card-title-white">Red Oak Tire & Wheel</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="p-primary" onClick={navigate}>
              <strong>Location: </strong><u>{address}</u>
            </p><br/>
            <p className="p-primary" onClick={call}>
              <strong>Phone: </strong><u>972-617-8810</u>
            </p><br/>
            <p>
              <strong className="p-primary">Fax: </strong>972-617-5762
            </p>
          </IonCardContent>
        </IonCard>
        <Shop />
      </IonContent>
    </IonPage>
  );
};

export default Contact;
