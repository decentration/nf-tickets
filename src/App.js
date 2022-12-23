import { SubstrateContextProvider, useSubstrate } from './substrate-lib';
import { DeveloperConsole } from './substrate-lib/components';
import Processing from './components/Processing';
import AccountOverview from './pages/ticket/accounts/AccountOverview';
import ExtensionOnboarding from './pages/ticket/accounts/ExtensionOnboarding';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AboutMain from './pages/ticket/about/AboutMain';
import ClaimMain from './pages/ticket/enter/ClaimMain';
import GenerateMain from './pages/ticket/generate/GenerateMain';
import ConnectAccount from './pages/ticket/generate/ConnectAccount';
import HomeMain from './pages/ticket/home/HomeMain';
import BackgroundVideo from './pages/ticket/home/BackgroundVideo';

import PrivacyPolicy from './pages/ticket/policy/PrivacyPolicy';
import GiftSecretScanner from './pages/ticket/GiftSecretScanner';
import './polkadot.scss';

function Body () {
  const { apiState, giftTheme } = useSubstrate();

  return (
    <>
      <Switch>
        <Route path={'/about'}>
          <AboutMain />
        </Route>
        <Route path={'/enter'}>
          <ClaimMain />
          <Processing
            show={apiState !== 'READY'}
            message={`Connecting to ${giftTheme.network}...`}
          />
        </Route>
        <Route path={'/generate'}>
        <BackgroundVideo />
        <div className="content">
          <GenerateMain />
          <Processing
            show={apiState !== 'READY'}
            message={`Connecting to ${giftTheme.network}...`}
          />
        </div>
        </Route>
        <Route path={'/home'}>
          <HomeMain />
        </Route>
        <Route path={'/account/:accountAddress'}>
          <AccountOverview />
          <Processing
            show={apiState !== 'READY'}
            message={`Connecting to ${giftTheme.network}...`}
          />
        </Route>
        <Route path={'/giftScanner'}>
          <GiftSecretScanner />
          <Processing
            show={apiState !== 'READY'}
            message={`Connecting to ${giftTheme.network}...`}
          />
        </Route>
        <Route path={'/extension/:accountAddress'}>
          <ExtensionOnboarding />
          <Processing
            show={apiState !== 'READY'}
            message={`Connecting to ${giftTheme.network}...`}
          />
        </Route>
        <Route path={'/privacy-policy'}>
          <PrivacyPolicy />
        </Route>
        <Route path={'/'}>
          <Redirect to={'/generate'} />
        </Route>
      </Switch>
    </>
  );

}

export default function App () {
  return (
    <SubstrateContextProvider>
      <Router>
        <Body />
      </Router>
      <DeveloperConsole />
    </SubstrateContextProvider>
  );
}
