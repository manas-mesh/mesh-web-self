/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Listitem from './ListItem';

const ListItemStory = {
  title: 'Core Components/ListItem',
  component: Listitem,
};

export default ListItemStory;

export const Normal = () => (
  <Listitem
    title={'Abhishek Srivastava'}
    subTitle={'My team, Junior'}
    // leftComponent={
    //   'https://files.worldwildlife.org/wwfcmsprod/images/Lion_WWFGIFTS_cover_2020/magazine_small/2wafu1bmcz_b21fc8e6.jpeg'
    // }
    // rightComponent={'info'}
  />
);

// export const Disabled = () => (
//   <Listitem
//     title={'Abhishek Srivastava'}
//     subTitle={'My team, Junior'}
//     leftIcon={
//       'https://files.worldwildlife.org/wwfcmsprod/images/Lion_WWFGIFTS_cover_2020/magazine_small/2wafu1bmcz_b21fc8e6.jpeg'
//     }
//     rightIcon={'info'}
//     isDisabled={true}
//   />
// );

// export const ListItemWithNoRightIcon = () => (
//   <Listitem
//     title={'Abhishek Srivastava'}
//     subTitle={'My team, Junior'}
//     leftIcon={
//       'https://files.worldwildlife.org/wwfcmsprod/images/Lion_WWFGIFTS_cover_2020/magazine_small/2wafu1bmcz_b21fc8e6.jpeg'
//     }
//   />
// );

// export const ListItemWithNoIcons = () => <Listitem title={'Abhishek Srivastava'} subTitle={'My team, Junior'} />;

// export const ListItemWithNoMeta = () => (
//   <Listitem
//     title={'Abhishek Srivastava'}
//     leftIcon={
//       'https://files.worldwildlife.org/wwfcmsprod/images/Lion_WWFGIFTS_cover_2020/magazine_small/2wafu1bmcz_b21fc8e6.jpeg'
//     }
//   />
// );

// const getRightComponent = () => <MeshIcon name={'searchIcon'} />;

// export const ListItemWithRightComponent = () => (
//   <Listitem title={'Abhishek Srivastava'} rightComponent={getRightComponent} />
// );
