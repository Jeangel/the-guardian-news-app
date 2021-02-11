import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { BookmarksScreen } from '../screens/BookmarksScreen';
import { Icon } from '../components/atoms/Icon';
import { useTheme } from '../hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontFamily: 'DM Sans',
    fontSize: 13,
  },
  icon: {},
  tab: {
    paddingTop: 10,
  },
  tabBar: {
    height: 85,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4.65,
    elevation: 6,
    borderTopWidth: 0,
  },
});

const Tab = createBottomTabNavigator();

const renderTabBarIcon = ({ color, size, route }) => {
  let iconName;
  if (route.name === 'Search') {
    iconName = 'search';
  } else if (route.name === 'Bookmarks') {
    iconName = 'bookmark';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export const TabNavigation = () => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => renderTabBarIcon({ ...props, route }),
      })}
      tabBarOptions={{
        safeAreaInsets,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray40,
        labelStyle: styles.label,
        iconStyle: styles.icon,
        tabStyle: styles.tab,
        style: [styles.tabBar, { shadowColor: theme.colors.gray40 }],
      }}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
    </Tab.Navigator>
  );
};
