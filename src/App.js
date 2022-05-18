import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import TextSection from './components/TextSection/TextSection';
import ImageSection from './components/ImageSection/ImageSection'
import PluseItem from './components/PluseItem/PluseItem';
import networkImage from "../src/images/Network.svg"
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import CustomizeSection from './components/CustomizeSection/CustomizeSection';
import MapSection from './components/MapSection/MapSection';
import FAQSection from './components/FAQSection/FAQSection';
import GetSection from './components/GetSection/GetSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <TextSection/>
      <div className={styles.plusesSection}>
        <PluseItem text="Increase your store conversions"/>
        <PluseItem text="Offer an Amazon like delivery experience"/>
        <PluseItem text="Reduce your abandoned carts"/>
      </div>
      <ImageSection/>
      <div className={styles.wrapperTextBlock}>
        <p className={styles.textBlock}>
          Localli operates a network of micro-fulfilment spaces across the country in major cities, down to your nearest neighborhood.
        </p>
      </div>
      <div className={styles.networkImageWrapper}>
        <img src={networkImage} alt="network" className={styles.networkImage}/>
      </div>
      <HowItWorksSection/>
      <CustomizeSection/>
      <MapSection/>
      <FAQSection/>
      <GetSection/>
      <Footer/>
    </div>
  );
}

export default App;
