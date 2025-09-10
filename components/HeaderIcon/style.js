import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(570),
    display: 'flex',
    padding: verticalScale(30),
    justifyContent: 'flex-end',
    alignItems: 'left',
  },
  background: {
    width: '100%',
    height: verticalScale(420),
    position: 'absolute',
    top: 0,
    left: horizontalScale(30),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  headers: {
    height: '50%',
    alignSelf: 'end',
  },
});

export default style;
