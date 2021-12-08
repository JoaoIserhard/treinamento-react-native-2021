import React from 'react';
import Svg, { Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

const SpeakerIcon = () => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none">
      <G clip-path="url(#clip0)">
        <Path
          d="M14.4216 0.063584C14.1966 -0.0444106 13.9343 -0.013555 13.7415 0.140723L7.48809 5.14318H4.50025C3.79057 5.14318 3.2146 5.72044 3.2146 6.42883V11.5714C3.2146 12.2798 3.79057 12.8571 4.50025 12.8571H7.48809L13.7402 17.8595C13.8572 17.9521 13.9999 17.9997 14.1426 17.9997C14.2365 17.9997 14.3316 17.9791 14.4216 17.9367C14.644 17.8287 14.7854 17.6037 14.7854 17.3568V0.643412C14.7854 0.396567 14.644 0.171578 14.4216 0.063584ZM7.07154 11.5714H4.50025V6.42883H7.07154V11.5714ZM13.4998 16.0185L8.35719 11.9044V6.09585L13.4998 1.98177V16.0185Z"
          fill="#3F25E5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="18" height="18" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { SpeakerIcon };
