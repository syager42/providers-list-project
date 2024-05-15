export interface Address {
  city: string;
  line1: string;
  line2?: string;
  state: string;
  zip: string;
}

export interface Location {
  address: Address;
  distance: number;
  phone: string;
  practiceName: string;
}

export interface ProviderStats {
  insurances: Array<string>;
  providerId: number;
  wholeName: string;
  locations: Array<Location>;
  specialties: Array<string>;
  acceptingNewPatients: boolean;
  openScheduling: boolean;
  starRatingAverage: number;
  starRatingCount: number;
  photoUrl: string;
}
