import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import ChallengeProvider from './config/ChallengeProvider';
import {ToDoScreen, HomeScreen} from './screens';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import WalletScreen from './screens/WalletScreen';
import {Logo, Chevron} from '~/components/icons';
import {typos, colors} from '~/theme';
import {StackParams} from '~/ts/types';

const Stack = createStackNavigator<StackParams>();

const headerOptions: StackNavigationOptions = {
  headerTitleStyle: typos.navTitle,
  headerBackTitleStyle: [
    typos.textSmallXs2Regular,
    {color: colors.Turquoise[700]},
  ],
  headerBackImage: () => <Chevron />,
};

function App() {
  return (
    <ChallengeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ToDo"
            component={ToDoScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{...headerOptions, headerTitle: () => <Logo />}}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Wallet"
            component={WalletScreen}
            options={headerOptions}
          />
        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
    </ChallengeProvider>
  );
}

export default App;
