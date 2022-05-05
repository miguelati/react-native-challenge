import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {ToDoScreen, HomeScreen} from './screens';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import WalletScreen from './screens/WalletScreen';
import {Logo, Back} from '~/components/icons';
import {typos, colors} from '~/theme';

/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

// import Logo from './components/ui/Logo';
export type StackParams = {
  ToDo: undefined;
  Home: undefined;
  List: undefined;
  Detail: undefined;
  Wallet: undefined;
};

const Stack = createStackNavigator<StackParams>();

const headerOptions: StackNavigationOptions = {
  headerTitleStyle: [typos.navTitle, {flex: 1, textAlign: 'center'}],
  headerBackTitleStyle: [
    typos.textSmallXs2Regular,
    {color: colors.Turquoise[700]},
  ],
  headerBackImage: () => <Back />,
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ToDo" component={ToDoScreen} />
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
  );
}

export default App;
