/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';
import TestScreenViewContainer from './testScreen/TestScreenViewContainer';
import CameraViewContainer from './camera/CameraViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;
  if (key === 'Counter') {
    return <CounterViewContainer />;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer
        index={index}
      />
    );
  }

  if (key.indexOf('TestScreen') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <TestScreenViewContainer
        index={index}
      />
    );
  }

  if (key === 'Camera') {
    return <CameraViewContainer />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
