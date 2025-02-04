import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from './components/providers/AppProviders';
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;