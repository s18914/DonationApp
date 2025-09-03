import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('600'),
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
