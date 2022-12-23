import { Row, Col, Card } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import { useSubstrate, utils } from '../../../substrate-lib';
import config from '../../../config';
import { stringHelpers } from '../../../utils';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QrCode from '../QR/QrCode';
import '../../../index.css';


export default function PresentGift ({ giftInfo, removeGiftHandler }) {
  const { email, name, amount, secret } = giftInfo || {};
  const { giftTheme, chainInfo } = useSubstrate();
  const amountStr = amount && utils.formatBalance(amount, chainInfo?.token);
  const mailSubject = `Someone has sent you ${giftTheme?.content}`;
  const claimUrl = config.CLAIM_URL;
  const formattedSecret = secret && stringHelpers.formatGiftSecret(secret);
  const greeting = name ? `Name: ${name?.trim()}!` : 'Your ticket!';
  const giftMessage =
    `${greeting}\n` +
    `Ticket for Interactive Gallet bought for ${amountStr}. You can go to\n\n` +
    `${claimUrl}\n\n` +
    `and type in the following gift secret to claim your ${giftTheme?.content}.\n\n` +
    `${formattedSecret}\n\n` +
    `The website will walk you through the steps to create your own secure ${giftTheme.network} account.\n` +
    'Enjoy!';

  /* const mailToLink = `${email}?subject=${mailSubject}&body=${encodeURIComponent(
    giftMessage
  )}`;

  const mailToHandler = () => {
    window.open(`mailto:${mailToLink}`, 'sendGiftEmail');
  }; */

  const printHandler = () => {
    window.print();
  };

  return (
    <>
      <Card.Body>
        <CardHeader
          title={'Your Ticket'}
          cardText={
            'Your ticket was successfully generated! Be sure to save the ticket to provide on entry to the IRL or a virtual event.'
          }
        />
        <Row className="justify-content-center align-items-center my-4 mx-2">
          <Col className="px-0">
            <div
          
                  className="printable"
                  style={{
                    display: 'block',
                    padding: '20px',
                   background:'black',
                   color: 'white',
                    borderRadius: '10px',
                    border: 'dotted 2px black',
                  }}>
               
              <p>{greeting}</p>
              <p><b>Ticket Price:</b> {`${amountStr}`} </p>
              <p>If your ticket is related to a virtual event you can enter here:</p>
              <p>
                <em
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '5px',
                    marginTop: '20px',
                    marginBottom: '20px',
                    borderRadius: '5px'
                  }}>{`${claimUrl}`}</em>
              </p>
              <p>
                and type in the following gift secret to claim your{' '}
                {`${giftTheme.content}`}.</p>
                
                <p>If the ticket is related to a live event then share the ticket number or the QR code at the door.</p>
                <strong
                  className="black"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '5px',
                    color: "white",
                    marginTop: '20px',
                    marginBottom: '20px',
                    borderRadius: '5px',
                    border: 'dotted 2px white',
                  }}>
                  {formattedSecret}
                </strong>
                <p>
                The website will walk you through the steps to create your own secure{' '}
                {`${giftTheme?.network}`} account.</p>
              
              <p>Enjoy!</p>
                <div style={{
                  textAlign: 'center',
                  alignItems: 'center'}}>
                 <QrCode number={secret} />
                </div>
              </div>
          </Col>
        
        </Row>
        
        <Row>
          <Col className="px-5 flex-column flex-md-row d-flex justify-content-end">
            <button
              className="btn btn-link ml-3"
              onClick={() => removeGiftHandler(secret)}>
              Refund Ticket
            </button>
            <button
              className="btn btn-link ml-3"
              onClick={() => printHandler()}>
              Print
            </button>
            <CopyToClipboard text={giftMessage}>
              <button
                className="btn btn-primary ml-3"
                onClick={(e) => e.stopPropagation()}>
                Copy Message
              </button>
            </CopyToClipboard>
          </Col>
        </Row>
      </Card.Body>
    </>
  );
}
