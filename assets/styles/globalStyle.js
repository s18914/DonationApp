import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  mainPadding: {
    padding: horizontalScale(25),
  },
});

export default globalStyle;
