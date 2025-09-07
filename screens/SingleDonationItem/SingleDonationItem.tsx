import React from 'react';

import style from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, Text, View } from 'react-native';
import BackButton from '../../components/BackButton/BackButton';

import globalStyle from '../../assets/styles/globalStyle';
import { useAppSelector } from '../../redux/hooks';
import { useNavigation, useRoute } from '@react-navigation/native';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const donationItemInformation = useAppSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInformation = route?.params?.categoryInformation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation?.image }}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation?.name} isInactive={false} />
        </View>
        <Header type={1} title={donationItemInformation?.name ?? ''} />
        <Text style={style.description}>
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
