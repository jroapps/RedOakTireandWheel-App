import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Capacitor, Plugins } from '@capacitor/core';
import React, { useEffect } from 'react';
import { 
  home as homeIcon, 
  build as serviceIcon, 
  people as aboutIcon, 
  call as contactIcon,
  car as carIcon } from 'ionicons/icons';

/* Page Imports */  
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import MyService from './pages/MyService';

const App: React.FC = () => {

  // handling hardware back button
  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener("backButton", (e) => {
        if (window.location.pathname === "/home") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure you want to exit?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/about") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure you want to exit?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/services") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure you want to exit?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/contact") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure you want to exit?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/myservice") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure you want to exit?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure you want to exit?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } 
      });
    }
  }, []);
  
  return (
    <IonApp>
      <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/myservice">
                <MyService />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Redirect exact path="/" to="/home" />

            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeIcon} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="services" href="/services">
                <IonIcon icon={serviceIcon} />
                <IonLabel>Services</IonLabel>
              </IonTabButton>

              <IonTabButton tab="about" href="/about">
                <IonIcon icon={aboutIcon} />
                <IonLabel>About</IonLabel>
              </IonTabButton>

              <IonTabButton tab="contact" href="/contact">
                <IonIcon icon={contactIcon} />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>

              <IonTabButton tab="myservice" href="/myservice">
                <IonIcon icon={carIcon} />
                <IonLabel>My Service</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
    </IonApp>
  );
};

export default App;
