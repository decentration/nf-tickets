import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import FAQ from './FAQ';
import ProcessExplainerCard from './ProcessExplainerCard';
import { useSubstrate } from '../../../substrate-lib';

export default function AboutMain () {
  const { giftTheme } = useSubstrate();

  return (
    <div id="about-page">
      <Header />
      <Container className="d-flex flex-column align-items-center pb-5 bg-color-black">
        <div style={{ paddingBottom: '4rem' }}>
          <h1 className="about-heading pt-5 pb-4 text-center">
            The easiest way to send {giftTheme?.content}<br />to friends and family
          </h1>
          <p
            className="text-center text-large pb-5"
            style={{ maxWidth: '920px' }}>
            New-Futures welcomes all EDG Holders to gain access to our digital gallery. 

            Click below to sign in.
          </p>
        </div>
        <ProcessExplainerCard giftTheme={giftTheme} />
        <FAQ giftTheme={giftTheme} />
      </Container>
      <Footer className="bg-solid" />
    </div>
  );
}
