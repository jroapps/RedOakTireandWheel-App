import shop from '../img/shop.jpg';
import { data } from './data';
import React from 'react';
import { IonCard, IonCardContent, IonImg } from '@ionic/react';

const Shop: React.FC = () => {
    return (
      <IonCard>
        <IonCardContent>
          <IonImg src={shop}/><br/>
            {data.map((map) => 
            <p key={map.id} className="p-black">{map.owners}</p>)}
            {data.map((map) => 
            <p key={map.id} className="p-primary"><a href={map.emailBuster}>{map.sendBuster}</a></p>)}
            {data.map((map) => 
            <p key={map.id} className="p-primary"><a href={map.emailTim}>{map.sendTim}</a></p>)}
        </IonCardContent>
      </IonCard>
    );
}
export default Shop;