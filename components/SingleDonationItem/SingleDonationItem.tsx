import React, { FunctionComponent } from 'react';
import { Image, Pressable, View } from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from './style';

interface Props {
  donationItemId: number;
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress: (id: number) => void;
}

const SingleDonationItem: FunctionComponent<Props> = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}
    >
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} isInactive={false} />
        </View>
        <Image
          resizeMode={'cover'}
          source={{ uri: props.uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
