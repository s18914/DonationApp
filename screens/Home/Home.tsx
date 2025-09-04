import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import KfButton, { KFButtonTypes } from '../../components/KfButton/KfButton';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { View } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';

const Home = () => {
  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        globalStyle.mainPadding,
        { gap: '20' },
      ]}
    >
      <Header title={'Azzahri A.'} type={1} />
      <Tab title={'Highlight'} />
      <Tab title={'Highlight'} isInactive={true} />
      <Badge title="Environment" isInactive={false} />
      <Search
        onSearch={value => {
          return value;
        }}
        onPress={function (): {} {
          throw new Error('Function not implemented.');
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(24),
        }}
      >
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
      </View>

      <KfButton title="Dalej" icon="arrow" type={KFButtonTypes.Gradient} />
      <KfButton title="Włącz Face ID" type={KFButtonTypes.Gradient} />
      <KfButton
        title="Spróbuj ponownie"
        icon="reset"
        type={KFButtonTypes.Gradient}
      />
      <KfButton title="Nie teraz" type={KFButtonTypes.Outlined} />
      <KfButton
        title="Nie mam konta. Otwórz za darmo"
        type={KFButtonTypes.Dark}
      />
    </SafeAreaView>
  );
};

export default Home;
