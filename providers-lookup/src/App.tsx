import React, { useEffect, useState} from 'react';
import './App.css';
import { ProviderList } from './components/ProviderList';
import { ProviderDetailsCard } from './components/ProviderDetailsCard';
import * as Api from './api/ApiHelper';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ProviderStats} from "./interfaces/interfaces";

export const ProviderListContext: any = React.createContext(null);
export const SelectedProviderContext: any = React.createContext(null);

function App() {
  const [providerListData, setProviderListData] = useState<ProviderStats[]>([]);
  const [selectedProviderData, setSelectedProviderData] = useState<ProviderStats | null>(null);

 useEffect(() => {
    getProvidersListData();
  }, []);

  function getProvidersListData() {
    Api.getProvidersListData().then((response: any) => {
      setProviderListData(response);
    });
  }

  /**
   *
   * @param providerID
   */
  function getSelectedProviderData(providerID: string) {
    Api.getProviderFullData(providerID).then((response: any) => {
      setSelectedProviderData(response);
    });
  }

  /**
   *
   * @param event
   */
  function selectProvider(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const eventElement = (event.target as Element);
    if (eventElement.className.includes('provider-btn') && eventElement.id) {
      getSelectedProviderData(eventElement.id);
    }
  }

  /**
   *
   * @constructor
   */
  function BackToList() {
    return (
      <div className="my-3">
        <button className="btn btn-link color-primary" onClick={() => setSelectedProviderData(null)}>
          <FontAwesomeIcon size={'xl'} icon="arrow-left" className="pe-2"/>
          <span className="fw-bolder">Back to provider search</span>
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="background-primary">
        <h1 className="p-3">{selectedProviderData ? selectedProviderData?.wholeName : 'Providers'}</h1>
      </div>
      <div className="mx-3">
      {selectedProviderData
          ?
          <div>
            <BackToList />
            <SelectedProviderContext.Provider value={selectedProviderData}>
              <ProviderDetailsCard/>
            </SelectedProviderContext.Provider>
          </div>
          :
            <ProviderListContext.Provider value={providerListData}>
              <div onClick={(event) => selectProvider(event)}>
                <ProviderList/>
              </div>
            </ProviderListContext.Provider>
        }
      </div>
    </div>
  );
}

export default App;
library.add(fas, far);
