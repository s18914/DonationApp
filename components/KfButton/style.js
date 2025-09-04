import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const style = StyleSheet.create({
  background: {
    width: '100%',
    height: verticalScale(50),
    display: 'flex',
    borderRadius: horizontalScale(8),
  },
  pressable: {
    height: verticalScale(50),
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: getFontFamily('500'),
    fontSize: scaleFontSize(17),
    lineHeight: scaleFontSize(27),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  titleDark: {
    color: '#000000',
  },
  buttonGradient: {},
  buttonOutlined: {
    borderRadius: horizontalScale(8),
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#97979720',
  },
  buttonDark: {},
});

export default style;
