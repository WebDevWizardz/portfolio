import React from "react";

function Logo({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 1400 156"
    >
      <g fill={fill} clipPath="url(#a)">
        <path d="m1283.74 125.625 14.1-11.754c10.05 16.67 27.14 24.15 48.73 24.15 19.45 0 34.41-5.557 34.41-18.166 0-13.251-13.25-13.678-40.61-16.67-27.78-3.206-49.79-7.694-49.79-30.562 0-20.517 20.73-34.623 50.65-34.623 26.93 0 47.02 10.686 55.99 25.005l-13.04 11.327c-8.33-13.25-23.93-20.303-43.59-20.303-19.88 0-31.42 6.625-31.42 16.884 0 11.113 11.33 12.396 35.26 15.174 29.92 3.42 55.57 5.984 55.57 32.272 0 23.509-25.43 35.905-53.22 35.905-28.21 0-52.14-9.831-63.04-28.639Z" />
        <path d="m1167.89 125.625 14.11-11.754c10.04 16.67 27.14 24.15 48.73 24.15 19.45 0 34.41-5.557 34.41-18.166 0-13.251-13.25-13.678-40.61-16.67-27.78-3.206-49.8-7.694-49.8-30.562 0-20.517 20.73-34.623 50.66-34.623 26.92 0 47.01 10.686 55.99 25.005l-13.04 11.327c-8.33-13.25-23.93-20.303-43.6-20.303-19.87 0-31.41 6.625-31.41 16.884 0 11.113 11.32 12.396 35.26 15.174 29.92 3.42 55.57 5.984 55.57 32.272 0 23.509-25.43 35.905-53.22 35.905-28.21 0-52.15-9.831-63.05-28.639ZM1109.19 137.594c21.59 0 36.98-11.114 42.11-26.715l15.6 8.121c-6.63 18.807-27.57 35.264-57.71 35.264-36.97 0-63.47-23.937-63.47-58.132 0-33.127 25.86-58.132 63.47-58.132 36.55 0 59.42 24.364 59.42 55.567v7.481h-104.72c2.35 22.226 20.73 36.546 45.3 36.546Zm-.85-83.351c-21.59 0-39.32 11.968-43.6 32.058h85.06c-1.28-15.174-16.45-32.058-41.46-32.058ZM1011.97 1h20.3v153.451h-20.3V84.137H896.134v70.314h-20.517V1h20.517v65.185h115.836V1ZM738.048 154.264c-25.005 0-44.881-11.541-44.881-33.554 0-20.731 17.952-31.417 44.24-34.41l49.37-5.556v-2.778c0-14.106-11.541-23.51-33.341-23.51-19.021 0-35.264 8.977-39.966 21.8l-16.029-7.266C704.494 50.182 727.79 38 753.864 38c32.271 0 51.506 14.32 51.506 40.18v50.437c0 8.336 5.557 10.687 17.953 7.908v15.388c-21.372 4.061-32.913-3.847-34.837-16.884l-.213-1.069c-10.045 12.824-29.066 20.304-50.225 20.304Zm48.729-47.019V96.132l-46.592 5.343c-16.67 1.923-28.211 6.198-28.211 19.021 0 11.541 10.9 17.953 27.57 17.953 22.014 0 47.233-10.259 47.233-31.204ZM571.46 155.913V44.137h19.235V63.8c7.907-11.755 23.082-21.8 44.026-21.8 31.203 0 48.301 21.372 48.301 51.72v62.193h-19.449v-59.2c0-21.159-10.899-36.974-34.195-36.974-22.44 0-38.683 15.388-38.683 39.11v57.064H571.46ZM532.197 25.227V3h20.945v22.227h-20.945Zm20.09 19.448v111.776h-19.235V44.676h19.235ZM513.873 3v153.451h-19.235V3h19.235ZM420.165 38c35.477 0 62.62 23.723 62.62 58.132 0 34.195-27.143 58.132-62.62 58.132-35.905 0-62.834-23.937-62.834-58.132C357.331 61.723 384.26 38 420.165 38Zm0 99.594c24.791 0 44.026-16.243 44.026-41.462 0-25.433-19.235-41.462-44.026-41.462-25.219 0-44.454 16.03-44.454 41.462 0 25.219 19.235 41.462 44.454 41.462ZM361.345 43.496v19.235c-4.702-1.069-7.694-1.71-13.037-1.71-25.646 0-42.744 14.96-42.744 41.034v52.576h-19.235V42.855h19.235v23.51C313.899 51.616 328.005 42 348.735 42c5.13 0 9.618.641 12.61 1.496ZM195.14 156.264c-25.005 0-44.881-11.541-44.881-33.554 0-20.731 17.952-31.417 44.24-34.41l49.369-5.556v-2.778c0-14.106-11.541-23.51-33.34-23.51-19.021 0-35.264 8.977-39.966 21.8l-16.029-7.266C161.586 52.182 184.882 40 210.955 40c32.272 0 51.507 14.32 51.507 40.18v50.437c0 8.336 5.557 10.687 17.953 7.908v15.388c-21.372 4.061-32.913-3.847-34.837-16.884l-.214-1.069c-10.044 12.824-29.066 20.304-50.224 20.304Zm48.728-47.019V98.132l-46.591 5.343c-16.67 1.923-28.211 6.198-28.211 19.021 0 11.541 10.9 17.953 27.57 17.953 22.013 0 47.232-10.259 47.232-31.204Z" />
        <path d="M20.517 1v82.282L122.89 1h29.494L68.39 67.04l89.977 87.411h-27.784L53.216 79.008l-32.699 25.646v49.797H0V1h20.517Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h1400v155.802H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
Logo.defaultProps = {
  fill: "#ECECEE",
};

export default Logo;
