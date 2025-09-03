import React, { FunctionComponent, useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';
import { horizontalScale } from '../../assets/styles/scaling';

interface Prop {
  title: string;
  isInactive?: boolean;
  onPress?: () => {};
}

const Tab: FunctionComponent<Prop> = ({
  isInactive = false,
  onPress = () => {},
  ...props
}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={() => onPress()}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, isInactive && style.inactiveTitle]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
};

export default Tab;
