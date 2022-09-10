import axios from "axios";
import { errorHandler } from "../../error/errorHandler";

const WEATHER_ENDPOINT = (lat: number, lng: number) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe/London`;

const Locations = {
  TunbridgeWells: { lat: 51.13261799040855, lng: 0.26272454759982306 },
};

export const weatherQueryResolvers = {
  weather: async () => {
    try {
      const response = await axios.get(
        WEATHER_ENDPOINT(
          Locations.TunbridgeWells.lat,
          Locations.TunbridgeWells.lng
        )
      );
      const data = response.data;
      return data;
    } catch (error) {
      errorHandler(error);
      return [];
    }
  },
};
