import React, { CSSProperties } from 'react';

import { BannerLayer } from 'react-scroll-parallax';

const layerStyle: CSSProperties = {
  minWidth: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default [
  {
    amount: 1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-1.png',
    }),
  },
  {
    amount: 0.9,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-2.png',
    }),
  },
  {
    amount: 0.8,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-3.png',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-4.png',
    }),
  },
  {
    amount: 0.6,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-5.png',
    }),
  },
  {
    amount: 0.5,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-6.png',
    }),
  },
  {
    amount: 0.4,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-7.png',
    }),
  },
  {
    amount: 0.3,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-8.png',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-9.png',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-10.png',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-11.png',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-12.png',
    }),
  },
  {
    amount: 0.1,
    expanded: false,
    children: React.createElement('img', {
      style: layerStyle,
      alt: 'layer-img',
      src: '/assets/images/keyart/keyart-layer-13.png',
    }),
  },
] as BannerLayer[];
