import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {typos, colors} from '~/theme';

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.mainItemContainer}>
            <Pressable onPress={onPress}>
              <View
                style={[styles.item, isFocused ? styles.itemInFocus : null]}>
                <Text
                  style={[styles.text, isFocused ? styles.textInFocus : null]}>
                  {label}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    paddingBottom: 25,
    bottom: 0,
    backgroundColor: colors.White[500],
    borderTopWidth: 1,
    borderTopColor: colors.Gray[100],
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -3,
    flex: 1,
    width: 138,
    paddingVertical: 10,
    borderTopWidth: 0,
    borderTopColor: colors.Black[500],
  },
  itemInFocus: {
    borderTopWidth: 3,
    borderTopColor: colors.Turquoise[700],
  },
  text: {
    ...typos.textSmallXs1Bold,
    marginTop: 7,
    color: colors.Black[500],
  },
  textInFocus: {
    color: colors.Turquoise[700],
  },
});

export default TabBar;
