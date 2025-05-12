export interface ITicketmasterEvent {
  id: string;
  name: string;
  url?: string;
  description?: string;
  info?: string;
  pleaseNote?: string;
  priceRanges?: {
    type: string;
    currency: string;
    min: number;
    max: number;
  }[];
  dates: {
    start: {
      localDate: string;
      localTime?: string;
    };
  };
  images: {
    url: string;
    width: number;
    height: number;
    ratio: string;
  }[];
  _embedded: {
    attractions: [
      {
        name: string;
        description?: string;
      }
    ];
    venues: {
      name: string;
      address?: {
        line1?: string;
        line2?: string;
      };
      city: {
        name: string;
      };
      state?: {
        name: string;
        stateCode?: string;
      };
      country?: {
        name: string;
      };
      postalCode?: string;
    }[];
  };
}

export interface ITicketmasterSearchResponse {
  page?: {
    number: number;
    totalPages: number;
  };
  _embedded?: {
    events: ITicketmasterEvent[];
  };
}
