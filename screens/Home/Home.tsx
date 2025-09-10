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
import {
  DonationType,
  updateSelectedDonationId,
} from '../../redux/reducers/Donations';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import { resetToInitialState } from '../../redux/reducers/User';
import { logOut } from '../../api/user';
import HeaderIcon from '../../components/HeaderIcon/HeaderIcon';

const Home = () => {
  const navigation = useNavigation();
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
        <View style={{ height: '100%' }}>
          {/* <Header title={'Dokończ rejestrację konta'} type={1} />
          <Header title={'Pierwsze logowanie'} type={2} />
          <Header title={'Nie mam dostępu do telefonu'} type={3} />
          <Header title={'Kod PIN (6 cyfr)'} type={4} />
          <Header
            title={
              'Kod PIN musi się składać z 6 cyfr i będzie służył do logowania do aplikacji.  '
            }
            type={5}
          />
          <Header title={'Informacja prawna'} type={6} /> */}
          <HeaderIcon
            title="Dokończ rejestrację konta"
            title2="Posiadasz login i hasło, ale Twoje konto na KupFundusz.pl nie jest w pełni kompletne."
            title3="Dokończ proces zakładania konta, by móc rozpocząć inwestowanie, a następnie aktywuj dostęp do aplikacji."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

// <View style={style.header}>
//           <View>
//             <Text style={style.headerIntroText}>Hello, </Text>
//             <View style={style.username}>
//               <Header title={user.displayName + ' 👋'} type={1} />
//             </View>
//           </View>
//           <View>
//             <Image
//               source={{ uri: user.profileImage }}
//               style={style.profileImage}
//               resizeMode={'contain'}
//             />
//             <Pressable
//               onPress={async () => {
//                 dispatch(resetToInitialState());
//                 await logOut();
//               }}
//             >
//               <Header type={3} title={'Logout'} color={'#156CF7'} />
//             </Pressable>
//           </View>
//         </View>
//         <View style={style.searchBox}>
//           <Search
//             onSearch={function (s: string): {} {
//               throw new Error('Function not implemented.');
//             }}
//             onPress={function (): {} {
//               throw new Error('Function not implemented.');
//             }}
//             placeholder={''}
//           />
//         </View>
//         <Pressable style={style.highlightedImageContainer}>
//           <Image
//             style={style.highlightedImage}
//             source={require('../../assets/images/highlighted_image.png')}
//             resizeMode={'contain'}
//           />
//         </Pressable>
//         <View style={style.categoryHeader}>
//           <Header title={'Select Category'} type={2} />
//         </View>
//         <View style={style.categories}>
//           <FlatList
//             onEndReachedThreshold={0.5}
//             onEndReached={() => {
//               if (isLoadingCategories) {
//                 return;
//               }

//               setIsLoadingCategories(true);
//               let newData = pagination(
//                 categories.categories,
//                 categoryPage,
//                 categoryPageSize,
//               );
//               if (newData.length > 0) {
//                 setCategoryList(prevState => [...prevState, ...newData]);
//                 setCategoryPage(prevState => prevState + 1);
//               }
//               setIsLoadingCategories(false);
//             }}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={categoryList}
//             renderItem={({ item }) => (
//               <View style={style.categoryItem} key={item.categoryId}>
//                 <Tab
//                   tabId={item.categoryId}
//                   onPress={value => dispatch(updateSelectedCategoryId(value))}
//                   title={item.name}
//                   isInactive={item.categoryId !== categories.selectedCategoryId}
//                 />
//               </View>
//             )}
//           />
//         </View>
//         {donationItems.length > 0 && (
//           <View style={style.donationItemsContainer}>
//             {donationItems.map(value => {
//               const categoryInformation = categories.categories.find(
//                 val => val.categoryId === categories.selectedCategoryId,
//               );
//               return (
//                 <View
//                   key={value.donationItemId}
//                   style={style.singleDonationItem}
//                 >
//                   <SingleDonationItem
//                     onPress={selectedDonationId => {
//                       dispatch(updateSelectedDonationId(selectedDonationId));
//                       //@ts-ignore
//                       navigation.navigate(Routes.SingleDonationItem, {
//                         categoryInformation,
//                       });
//                     }}
//                     donationItemId={value.donationItemId}
//                     uri={value.image}
//                     donationTitle={value.name}
//                     badgeTitle={categoryInformation?.name ?? ''}
//                     price={parseFloat(value.price)}
//                   />
//                 </View>
//               );
//             })}
//           </View>
//         )}
