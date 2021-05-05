import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { car } from 'ionicons/icons';
import React from 'react';
import dayjs from 'dayjs';
import { useLocalStorage } from '../components/LocalStorage';
import './Home.css';

const MyService: React.FC = () => {

  const [service, setService] = useLocalStorage('service', '');
  const [mileage, setMileage] = useLocalStorage('mileage', '');
  const [amount, setAmount] = useLocalStorage('amount', '');
  const [date, setDate] = useLocalStorage('date', '');

  const [myService, setMyService] = useLocalStorage('myService', '');
  const [myMileage, setMyMileage] = useLocalStorage('myMileage', '');
  const [myAmount, setMyAmount] = useLocalStorage('myAmount', '');
  const [myDate, setMyDate] = useLocalStorage('myDate', undefined);

  function formatDate(isoString: dayjs.ConfigType | undefined) {
    return dayjs(isoString).format('MMM DD, YYYY');
  }

  function submitService() {
    setMyService(service);
    setMyMileage(mileage);
    setMyAmount(amount);
    setMyDate(date);
    setService('');
    setMileage('');
    setAmount('');
    setDate(formatDate(undefined));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>My Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard className="card-color-white">
          <IonCardHeader>
            <IonCardTitle className="card-title-white">My Service</IonCardTitle>
          </IonCardHeader>
          <p>
            Use the form below to enter your most recent service.
          </p>
        </IonCard>

        <IonCard className="card-color-primary">
          <IonCardHeader>
            <IonCardTitle className="card-title-primary">Enter Service</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel position="floating">Date of Service:</IonLabel>
            <IonDatetime value={date} onIonChange={e => setDate(formatDate(e.detail.value!))}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Service Type:</IonLabel>
            <IonInput value={service} autocapitalize="words" onIonChange={e => setService(e.detail.value!)} type="text" name="service"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mileage:</IonLabel>
            <IonInput value={mileage} onIonChange={e => setMileage(e.detail.value!)} type="text" name="mileage"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Amount:</IonLabel>
            <IonInput value={amount} onIonChange={e => setAmount(e.detail.value!)} name="amount"></IonInput>
          </IonItem>
          <IonButton type="submit" onClick = {submitService} className="ion-button-login"><IonIcon icon={car} slot="start" />Enter Service</IonButton>
        </IonCard>

        <IonCard className="card-color-white">
          <IonCardHeader>
            <IonCardTitle className="card-title-white">Recent Service</IonCardTitle>
          </IonCardHeader>
              <p className="p-left">Date of Service: {myDate}</p>
              <p className="p-left">Service Type: {myService}</p>
              <p className="p-left">Mileage: {myMileage}</p>
              <p className="p-left">Amount: ${myAmount}</p>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default MyService;
