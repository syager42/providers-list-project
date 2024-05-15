import React from 'react';
import { SelectedProviderContext } from '../App';
import { ProviderStats } from '../interfaces/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonPopover } from "./ButtonPopover";

export const ProviderDetailsCard = () => {
  const provider: ProviderStats = React.useContext(SelectedProviderContext);

  // I'm not sure how often providers have multiple specialties and what the average number of specialties is like.
  // I'm expecting something like 2-5 are common and that seems a reasonable to number to simply list out
  function Specialty() {
    return (
      <>
        <Label text="Specialty"/>
        <div className="mb-3">{provider.specialties.join(', ')}</div>
      </>
    );
  }

  // Ideally I think the location shown would be the closest one to the user and/or the location they searched by,
  // with something like a dropdown select allowing them to view additional locations. Hardcoded for now though!
  function Location() {
    const address = provider.locations[0].address;
    return (
      <>
        <div className="mb-3">
          <Label text="Location"/>
          <div>{address.line1}</div>
          <div>{`${address.city}, ${address.state} ${address.zip}`}</div>
        </div>
        <Label text="Phone" />
        <div className="mb-3">{provider.locations[0].phone}</div>
      </>
    );
  }

  function Insurance() {
    return (
      <>
        <Label text="Insurance accepted" />
        <div className="d-flex align-items-center">
          <div>{provider.insurances.slice(0, 3).join(', ')}</div>
          {
            provider.insurances.length > 3 &&
            <ButtonPopover buttonText="view all" popoverContent={provider.insurances.join(', ')}/>
          }
        </div>
      </>
    );
  }

  function Label(props: {text: string}) {
    return (
      <h6 className="fw-bold mb-0">{props.text}</h6>
    )
  }

  return (
    <div className="d-flex mx-auto card provider-card">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="profile-wrapper">
              <img src={provider.photoUrl} alt={provider?.wholeName}/>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon size={'xl'} icon="star" className="pe-2"/>
              <span>{`${provider.starRatingAverage.toFixed(1)} (${provider.starRatingCount} reviews)`}</span>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <Specialty />
            <Location />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Insurance />
          </div>
        </div>
      </div>
    </div>
  )
}
