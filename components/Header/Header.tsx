import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import style from './style';

interface Props {
  title: string;
  type: number;
  color?: string;
}

const Header: FunctionComponent<Props> = ({
  title = '',
  type = 1,
  color = '#000000',
}) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
    }
  };
  return (
    <View>
      <Text style={[styleToApply(), color && { color: color }]}>{title}</Text>
    </View>
  );
};

export default Header;
