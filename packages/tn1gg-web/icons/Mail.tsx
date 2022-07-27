import React from "react";

interface IProps {
  size?: number;
  color?: string;
}

export const Mail: React.FC<IProps> = ({ size = 24, color = "white" }) => {
  return (
    <>
      <svg
        version="1.1"
        width={size}
        height={size}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 489.776 489.776"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M469.075,64.488h-448.2c-10.3,0-18.8,7.5-20.5,17.3c-0.6,2.4-0.3,322.7-0.3,322.7c0,11.4,9.4,20.8,20.8,20.8h447.1
		c11.4,0,20.8-8.3,21.8-19.8v-320.2C489.875,73.788,480.475,64.488,469.075,64.488z M404.275,106.088l-159.8,114.4l-159.8-114.4
		H404.275z M40.675,384.788v-259.9l192.4,137.2c7.8,6.3,17.2,4.4,22.9,0l192.4-137.8v260.5L40.675,384.788L40.675,384.788z"
          />
        </g>
      </svg>
    </>
  );
};
