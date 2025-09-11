export const getFontFamily = (weight: string) => {
  const baseFont = 'EuclidCircularB';
  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
    case '200':
      return `${baseFont}-ExtraLight`;
    case '300':
      return `${baseFont}-Medium`;
    case 'normal':
    case '400':
      return `${baseFont}-Medium`;
    case '500':
      return `${baseFont}-Medium`;
    case '600':
      return `${baseFont}-Medium`;
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case '800':
      return `${baseFont}-ExtraBold`;
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
