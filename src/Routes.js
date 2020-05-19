import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Store from './pages/Store'
function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Store" component={Store} />
                <Tab.Screen name="AboutUs" component={AboutUs} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}