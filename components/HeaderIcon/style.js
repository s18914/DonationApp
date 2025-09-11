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
    height: verticalScale(800),
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
  content: {
    display: 'flex',
    gap: verticalScale(10),
    height: '60%',
    alignSelf: 'end',
    justifyContent: 'space-between',
  },
  headers: {
    display: 'flex',
    gap: verticalScale(10),
    height: 'auto',
    alignSelf: 'end',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    display: 'flex',
    gap: 10,
  },
});

export default style;
