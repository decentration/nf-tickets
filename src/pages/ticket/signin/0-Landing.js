import { useContext } from 'react';
import { GenerateContext } from './GenerateMain';
import { Card, Row, Col } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import { useSubstrate } from '../../../substrate-lib';

export default function Landing () {
  const { nextStep } = useContext(GenerateContext);
  const { apiState, giftTheme } = useSubstrate();
  return (
    <>
      <Card.Body className='d-flex flex-column landing'>
        <CardHeader
          title={`${giftTheme?.network}`}
          cardText={`Sign in to the Dapp`}
        />
        <Row className="justify-content-center align-items-center">
          <Col className="d-flex flex-column justify-content-around align-items-center">
            <div className="pt-2">
              <button
                className="btn btn-primary btn-lg"
                disabled={apiState !== 'READY'}
                onClick={() => nextStep()}>
                CONNECT
              </button>
            </div>
            {/* <a
              className="pt-4 small text-underline"
              href="#/About"
              target="_blank">
              {`→ How does ${giftTheme?.network} Gifts work?`}
            </a> */}
          </Col>
        </Row>
      </Card.Body>
    </>
  );
}
