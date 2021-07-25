import React from 'react';

type IconColors = {
  first: 'green.800';
  second: 'yellow.400';
  third: 'green.600';
};

export const Icon = ({ first, second, third }: IconColors) => {
  const colors = {
    'green.800': '#2F855A',
    'green.600': '#22543D',
    'yellow.400': '#ECC94B'
  };

  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 30">
      <path
        d="M.014 28.396l2.417-.605V2.01L.014 1.404V.8h21.553v7.251H20.36a5.697 5.697 0 01-1.33-1.53 9.083 9.083 0 01-1.289-4.714H9.079v12.69h4.632a8.931 8.931 0 011.048-2.86c.215-.403.47-.792.765-1.168h1.209v9.064h-1.209a7.934 7.934 0 01-.765-1.168 8.932 8.932 0 01-1.048-2.86H9.08V27.79l2.417.605V29H.014v-.604zm35.263 1.208c-3.33 0-5.949-.94-7.856-2.82-1.88-1.907-2.82-4.525-2.82-7.855s.94-5.936 2.82-7.816c1.907-1.907 4.526-2.86 7.856-2.86s5.935.953 7.815 2.86c1.907 1.88 2.86 4.485 2.86 7.816 0 3.33-.953 5.948-2.86 7.855-1.88 1.88-4.485 2.82-7.815 2.82zm0-.805c1.074 0 1.974-.752 2.699-2.256.752-1.504 1.128-4.042 1.128-7.614s-.376-6.11-1.128-7.614c-.725-1.504-1.625-2.256-2.7-2.256-1.073 0-1.987.752-2.739 2.256-.725 1.504-1.087 4.042-1.087 7.614s.362 6.11 1.087 7.614c.752 1.504 1.666 2.256 2.74 2.256zm15.927-.403l2.417-.605V10.066l-2.417-.605v-.604h3.626c1.584 0 2.833.51 3.746 1.531.35.403.645.9.886 1.49.403-.59.9-1.127 1.491-1.61 1.343-1.075 2.847-1.612 4.512-1.612 1.423 0 2.484.335 3.183 1.007.725.644 1.087 1.584 1.087 2.82 0 .913-.282 1.652-.846 2.216-.537.537-1.262.805-2.175.805-.376 0-.752-.027-1.128-.08l-.483-.121v-5.64c-1.37 0-2.62.537-3.747 1.611a8.47 8.47 0 00-1.29 1.612V27.79l2.418.605V29h-11.28v-.604z"
        fill={colors[first]}
      />
      <path
        d="M76.78 29.403c-.805 0-1.517-.296-2.135-.886-.59-.618-.886-1.33-.886-2.136 0-.805.296-1.504.886-2.094.618-.618 1.33-.927 2.136-.927.805 0 1.504.309 2.094.927.618.59.927 1.289.927 2.094 0 .806-.309 1.518-.927 2.136-.59.59-1.289.886-2.094.886z"
        fill={colors[second]}
      />
      <path
        d="M89.279 5.836v21.351l3.222 1.209V29h-7.654v-.604l3.223-1.209V2.01l-2.417-.605V.8h5.036c1.396 0 2.497.295 3.303.886.833.564 1.544 1.41 2.135 2.538l8.782 16.8 6.728-16.8c.457-1.181 1.074-2.04 1.853-2.578.779-.564 1.974-.846 3.586-.846h4.23v.604l-2.417.605V27.79l2.417.605V29h-11.482v-.604l2.417-.605V5.836l-9.467 23.567h-1.208L89.279 5.836zm43.925 22.56l2.417-.605v-9.265l-8.258-16.517-2.015-.605V.8h5.036c1.397 0 2.511.295 3.344.886.859.591 1.558 1.437 2.095 2.538l5.962 11.885 6.123-13.496-3.021-1.209V.8h7.654v.604l-3.223 1.209-7.05 15.51v9.668l2.418.605V29h-11.482v-.604z"
        fill={colors[third]}
      />
    </svg>
  );
};