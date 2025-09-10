import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('500'),
    letterSpacing: -1.67,
    fontSize: scaleFontSize(40),
    lineHeight: scaleFontSize(46),
  },
  title2: {
    fontFamily: getFontFamily('500'),
    letterSpacing: -1.74,
    fontSize: scaleFontSize(34),
    lineHeight: scaleFontSize(46),
  },
  title3: {
    fontFamily: getFontFamily('500'),
    letterSpacing: -1.09,
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(27),
  },
  title4: {
    fontFamily: getFontFamily('500'),
    letterSpacing: -0.75,
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  title5: {
    fontFamily: getFontFamily('400'),
    letterSpacing: -0.8,
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(25),
  },
  title5: {
    fontFamily: getFontFamily('400'),
    letterSpacing: -0.73,
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(27),
  },
});

export default style;
