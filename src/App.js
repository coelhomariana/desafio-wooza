import React from 'react';
import PlatformCard from './components/PlatformCard/index';
import GlobalStyle from '../src/components/styles/GlobalStyle'

function App() {
  return (
    <div>
      <GlobalStyle>
        <PlatformCard>
        </PlatformCard>
      </GlobalStyle>
    </div>
  );
}

export default App;
