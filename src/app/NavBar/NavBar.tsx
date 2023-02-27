import { ANDROID } from "nativewind/dist/utils/selector";
import { Text, TouchableOpacity, View } from "react-native";
import { screenNames } from "../HomeScreen/HomeScreen";

interface NavBarProps {
    setCurrentScreen: (screenName: screenNames) => void
}

const NavBar = (props: NavBarProps) => {
    const { setCurrentScreen } = props

    const navBarTailwind = "basis-1/5 items-center justify-center h-12 w-full"

    return (
        <View>
            <TouchableOpacity
                onPress={() => { setCurrentScreen('tasks') }}
                className={'basis-1/5 items-center justify-center bg-slate-500 border-2 rounded-full h-20 w-20 absolute bottom-0 z-30 self-center'}
            >
                <Text className="">Tasks</Text>
            </TouchableOpacity>
            <View
                className="flex flex-row bg-slate-300"
            >
                <TouchableOpacity
                    className={navBarTailwind + ' border-r-2 border-slate-400'}>
                    <Text>Vault</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setCurrentScreen('store') }}
                    className={navBarTailwind}
                >
                    <Text>Store</Text>
                </TouchableOpacity>
                <TouchableOpacity className={navBarTailwind}>
                </TouchableOpacity>
                <TouchableOpacity className={navBarTailwind + ' border-r-2 border-slate-400'}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity className={navBarTailwind}>
                    <Text>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar