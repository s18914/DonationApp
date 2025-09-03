import React, { FunctionComponent } from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';

interface Props {
  title: string;
  isDisabled?: boolean;
  onPress?: () => {};
}

const Button: FunctionComponent<Props> = ({ isDisabled = false, ...props }) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button, isDisabled && style.disabled]}
      onPress={() => (props.onPress ? props.onPress() : null)}
    >
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
