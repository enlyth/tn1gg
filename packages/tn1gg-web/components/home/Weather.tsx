import React from "react";
import { useWeatherQuery } from "../../graphql/generated/schema";
import { Loading } from "../generic/Loading";

export const Weather = () => {
  const { data, error, loading } = useWeatherQuery();

  const chartData = {
    labels: data?.weather.daily.time,
    datasets: [
      {
        label: "Temperature (°C)",
        data: data?.weather.daily.temperature_2m_max,
        borderColor: "rgb(79,70,229)",
        borderJoinStyle: "round" as any,
        elements: {
          point: {
            radius: 0,
          },
        },
        tension: 0.4,
        zoom: {
          enabled: false,
        },
      },
    ],
  };

  return (
    <div className="bg-neutral-800 p-4 flex flex-row justify-center items-stretch flex-wrap max-w-8xl mt-8 rounded-lg shadow-md gap-2 min-h-[128px]">
      {loading && <Loading />}
      {error && <div>Failed to load news feed.</div>}
      {data &&
        data.weather.daily.time.map((time, i) => (
          <div
            className="flex flex-col text-white bg-neutral-700 p-3 rounded-md justify-between w-[128px]"
            key={`weather-${i}`}
          >
            <div className="font-bold text-lg">
              {Math.round(data.weather.daily.temperature_2m_max[i])}°C
            </div>
            {!!data.weather.daily.precipitation_sum[i] && (
              <div>☔{data.weather.daily.precipitation_sum[i]}mm</div>
            )}
            <div>
              {new Date(time).toLocaleDateString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </div>
          </div>
        ))}
    </div>
  );
};
