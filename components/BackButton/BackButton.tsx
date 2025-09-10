import React, { FunctionComponent } from 'react';

import style from './style';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onPress: () => void;
}

const BackButton: FunctionComponent<Props> = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon color="#47CC0E" icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
