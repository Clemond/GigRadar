export interface ITicketmasterEvent {
  id: string;
  name: string;
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
      }
    ];
    venues: {
      city: {
        name: string;
      };
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
