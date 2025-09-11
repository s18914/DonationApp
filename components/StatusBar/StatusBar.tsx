import React, { FunctionComponent, useRef, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';

import style from './style';
import BackButton from '../BackButton/BackButton';
import Header from '../Header/Header';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  step: number;
  onBack: (s: string) => {};
}

const StatusBar: FunctionComponent<Props> = ({ ...props }) => {
  const barWidth = (props.step ?? 1) * 20;

  return (
    <View>
      <View style={style.container}>
        <BackButton
          style={style.arrow}
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Header title={props.title} type={5} />
      </View>
      <LinearGradient
        colors={['rgba(10, 206, 148, 1)', 'rgba(104, 220, 69, 1)']}
        style={[style.progressLine, { width: `${barWidth}%` }]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      ></LinearGradient>
    </View>
  );
};

export default StatusBar;
