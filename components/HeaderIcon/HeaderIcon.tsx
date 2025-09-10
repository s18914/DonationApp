import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import style from './style';
import RadialGradient from 'react-native-radial-gradient';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  title2?: string;
  title3?: string;
  icon?: string;
  color?: string;
}

const HeaderIcon: FunctionComponent<Props> = ({ title = '', ...props }) => {
  return (
    <View style={style.container}>
      <View style={style.background}>
        <RadialGradient
          style={style.gradient}
          colors={['rgba(78, 207, 23, 0.29)', 'rgba(255, 255, 255, 1)']}
          stops={[0, 0.8]}
          center={[horizontalScale(155), verticalScale(210)]}
          radius={200}
        ></RadialGradient>
        <FontAwesomeIcon
          style={style.icon}
          icon={faArrowLeft}
          color={'#47CC0E'}
          size={scaleFontSize(80)}
        />
      </View>
      <View style={style.headers}>
        <Header title={title} />
        {props.title2 && <Header title={props.title2} type={5} />}

        {props.title3 && <Header title={props.title3} type={5} />}
      </View>
    </View>
  );
};

export default HeaderIcon;
