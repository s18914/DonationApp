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
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;
