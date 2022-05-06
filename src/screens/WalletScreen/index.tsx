import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import AccountSection from './AccountSection';
import PartnersSection from './PartnersSection';
import {typos, colors} from '~/theme';
import TabBar from '~/components/common/TabBar';

const Tab = createBottomTabNavigator();

const commonOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabelStyle: {
    ...typos.textSmallXs1Bold,
    color: colors.Black[500],
  },
};

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Account"
        component={AccountSection}
        options={commonOptions}
      />
      <Tab.Screen
        name="Partners"
        component={PartnersSection}
        options={commonOptions}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
