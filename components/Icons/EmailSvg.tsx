"use client";
import { SvgIcon, SvgIconProps } from "@mui/material";

export const EmailSvgIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      sx={{ height: 28, width: 28 }}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 4.25H29.75C31.3148 4.25 32.5833 5.51853 32.5833 7.08333V26.9167C32.5833 28.4815 31.3148 29.75 29.75 29.75H4.25C2.68519 29.75 1.41666 28.4815 1.41666 26.9167V7.08333C1.41666 5.51853 2.68519 4.25 4.25 4.25ZM4.25 13.6257V26.9167H29.75V13.6263L17 20.0013L4.25 13.6257ZM4.25 10.4578L17 16.8335L29.75 10.4585V7.08333H4.25V10.4578Z"
        fill="url(#paint0_linear_14_52)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_52"
          x1="32.5833"
          y1="16.939"
          x2="1.41666"
          y2="16.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2EF20E" />
          <stop offset="0.584338" stopColor="#0EF2E5" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};
