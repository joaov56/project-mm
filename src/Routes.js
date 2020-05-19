import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Store from './pages/Store'


export default function MyTabs() {
    return (
        <NavigationContainer>


            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home';
                            color = '#ffffff'
                        } else if (route.name === 'Store') {
                            iconName = focused ? 'ios-cart' : 'ios-cart';
                            color = '#ffffff'
                        } else if (route.name == 'AboutUs') {
                            iconName = focused ? 'ios-information-circle-outline' : 'ios-information-circle-outline';
                            color = focused ? 'white' : 'white'
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#ffffff',
                    inactiveTintColor: 'grey',
                    inactiveBackgroundColor: '#A0522D',
                    activeBackgroundColor: '#A0522D'


                }}


            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Store" component={Store} />
                <Tab.Screen name="AboutUs" component={AboutUs} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}