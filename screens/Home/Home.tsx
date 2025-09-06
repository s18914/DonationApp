import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Tab from '../../components/Tab/Tab';
import {
  CategoryType,
  updateSelectedCategoryId,
} from '../../redux/reducers/Categories';
import { DonationType } from '../../redux/reducers/Donations';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

const Home = () => {
  const user = useAppSelector(state => state.user);
  const categories = useAppSelector(state => state.categories);
  const donations = useAppSelector(state => state.donations);
  const dispatch = useAppDispatch();

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [donationItems, setDonationItems] = useState<DonationType[]>([]);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  useEffect(() => {
    const items: DonationType[] = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  const pagination = (items: any[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '. 👋'}
                type={1}
              />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search
            onSearch={function (s: string): {} {
              throw new Error('Function not implemented.');
            }}
            onPress={function (): {} {
              throw new Error('Function not implemented.');
            }}
            placeholder={''}
          />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }

              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => (
              <SingleDonationItem
                onPress={selectedDonationId => {}}
                donationItemId={value.donationItemId}
                uri={value.image}
                donationTitle={value.name}
                badgeTitle={
                  categories.categories.filter(
                    val => val.categoryId === categories.selectedCategoryId,
                  )[0].name
                }
                key={value.donationItemId}
                price={parseFloat(value.price)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
