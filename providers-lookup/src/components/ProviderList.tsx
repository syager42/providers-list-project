import React from 'react';
import { ProviderListContext } from '../App';
import { ProviderStats, Address } from '../interfaces/interfaces';

export const ProviderList = () => {
  const providers: ProviderStats[] = React.useContext(ProviderListContext);

  function ProviderListItem (props: {provider: ProviderStats}) {
    const provider: ProviderStats = props.provider;
    const address: Address = props.provider.locations[0].address;

    return (
      <div className="col-12 col-lg-6">
        <div className="card shadow-sm my-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="thumbnail-wrapper pr-3">
                  <img src={provider.photoUrl} alt={provider?.wholeName}/>
                </div>
              </div>
              <div className="col">
                <h5 className="fw-bold mb-0">{provider.wholeName}</h5>
                <div className="small">{provider.specialties[0]}</div>
                <div className="small">{address.line1} {address.city}, {address.state} {address.zip}</div>
              </div>
              <div className="col-12 col-lg-auto">
                <button
                  id={provider.providerId.toString()}
                  className="btn btn-outline-primary provider-btn mt-3 mt-lg-0 w-100"
                >View provider details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      {providers.map((provider: ProviderStats) => {
        return (
          <ProviderListItem key={provider.providerId} provider={provider}/>
        )
      })}
    </div>
  )
}
