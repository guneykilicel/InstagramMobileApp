import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Icons
import {
    HomeIcon,
    HomeFilled,
    SearchIcon,
    SearchFilled,
    ReelIcon,
    ReelFilled,
    ShopIcon,
    ShopFilled,
} from "./Icons";

// screens
import Home from "./screens/home";
import Search from "./screens/Search";
import Reel from "./screens/Reel";
import Shop from "./screens/Shop";
import Profile from "./screens/Profile";

function Screens() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#262626'
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <HomeFilled size={30} fill={color} />

                        return <HomeIcon size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <SearchFilled size={30} fill={color} />

                        return <SearchIcon size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="reel"
                component={Reel}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <ReelFilled size={30} fill={color} />

                        return <ReelIcon size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="shop"
                component={Shop}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <ShopFilled size={30} fill={color} />

                        return <ShopIcon size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            style={[styles.avatar, {
                                borderColor: focused ? '#000' : 'transparent'
                            }]}
                            source={{
                                uri: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Screens

const styles = StyleSheet.create({
    avatar: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 21,
    }
})