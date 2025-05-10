export const APIConfig = {
  base_url: "https://app.ticketmaster.com/discovery/v2",
  key: "y8iKP66q9ygMnQZ8RRJnCeCDjPALHaEe",
  searchEvents: "/events.json?apikey=",

  eventType: {
    music: "&classificationName=music"
  },
  fetchOrder: {
    ascending: "&sort=date,asc"
  }
};
