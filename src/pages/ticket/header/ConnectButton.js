import { useContext } from 'react';
import { GenerateContext } from '../generate/GenerateMain';
import { Card, Row, Col } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import { useSubstrate } from '../../../substrate-lib';

export default function ConnectButton () {
  const { nextStep } = useContext(GenerateContext);
  const { apiState, giftTheme } = useSubstrate();
  return (
    <>
    
      
            <div className="pt-2">
              <button
                className="btn btn-primary btn-lg mr-2 "
                disabled={apiState !== 'READY'}
                onClick={() => nextStep()}>
                CONNECT
              </button>
            </div>
            
        
    </>
  );
}
