
import { useState } from "react";
import { View, StatusBar, Text } from "react-native";
import AllGoals from "../Goals/AllGoals";
import NavBar from "../NavBar/NavBar";
import Store from "../Store/Store";

export type screenNames = 'home' | 'tasks' | 'store'

const HomeScreen = () => {

    console.log('statusBarHeight: ', StatusBar.currentHeight);

    const [currentScreen, setCurrentScreen] = useState<screenNames>('home')

    console.log(currentScreen)

    const navigation = () => {
        if (currentScreen === 'tasks') {
            return (
                <View>
                    <AllGoals />
                </View>
            )
        } else if (currentScreen === 'store') {
            return (
                <View>
                    <Store></Store>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }

    return (
        <View className="h-full w-full flex-col items-center bg-green-200 relative">
            <View style={{ height: StatusBar.currentHeight + 4 }}></View>
            <View>
                {navigation()}
            </View>
            <View className="absolute bottom-0">
                <NavBar setCurrentScreen={(screenName: screenNames) => setCurrentScreen(screenName)}></NavBar>
            </View>
        </View>
    )
}

export default HomeScreen