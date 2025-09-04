import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from './style';

interface Props {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}

const SingleDonationItem: FunctionComponent<Props> = props => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} isInactive={false} />
        </View>
        <Image
          resizeMode={'contain'}
          source={{ uri: props.uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleDonationItem;
