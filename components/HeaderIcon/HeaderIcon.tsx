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
import KfButton, { KFButtonTypes } from '../KfButton/KfButton';

interface Props {
  title: string;
  title2?: string;
  title3?: string;
  icon?: string;
  color?: string;
}
import FaceId from '../../assets/icons/face_id';
import StatusBar from '../StatusBar/StatusBar';

export const MyComponent = () => {};

const HeaderIcon: FunctionComponent<Props> = ({ title = '', ...props }) => {
  return (
    <View>
      <StatusBar
        step={2}
        title="Aktywacja aplikacji (krok 2 z 5)"
        onBack={function (s: string): {} {
          throw new Error('Function not implemented.');
        }}
      />
      <View style={style.container}>
        <View style={style.background}>
          <RadialGradient
            style={style.gradient}
            colors={['rgba(78, 207, 23, 0.25)', 'rgba(255, 255, 255, 1)']}
            stops={[0, 0.8]}
            center={[horizontalScale(155), verticalScale(210)]}
            radius={horizontalScale(230)}
          ></RadialGradient>
          <FaceId
            style={style.icon}
            width={verticalScale(90)}
            height={verticalScale(90)}
            fill="#000"
          />
        </View>
        <View style={style.content}>
          <View style={style.headers}>
            <Header title={title} />
            {props.title2 && <Header title={props.title2} type={5} />}
            {props.title3 && <Header title={props.title3} type={5} />}
          </View>
          <View style={style.buttonsContainer}>
            <KfButton title={'Włącz Face ID'} type={KFButtonTypes.Gradient} />
            <KfButton title={'Nie teraz'} type={KFButtonTypes.Outlined} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderIcon;
