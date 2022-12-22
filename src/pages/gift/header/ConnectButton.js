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
    
      
            <div className="">
              <button
                className="bg-white p-0 tracking-widest	border-0 text-xl"
                disabled={apiState !== 'READY'}
                onClick={() => nextStep()}>
                CONNECT
              </button>
            </div>
            
        
    </>
  );
}
