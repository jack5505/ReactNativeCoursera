import React from 'react';
import MainComponent from "./components/MainComponent";
import {Provider} from 'react-redux'
import {ConfigureStore} from "./redux/configureStore";
import {PersistGate} from 'redux-persist/es/integration/react';
import {LoadingComponent} from "./components/LoadingComponent";

const {persistor,store} = ConfigureStore();

export default function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<LoadingComponent/>}>
              <MainComponent/>
          </PersistGate>
      </Provider>
  );
}

