import { View, Text } from "react-native";

const NavBar = () => {

    const navBarTailwind = "basis-1/5 items-center justify-center h-12 w-full"

    return (
        <View>
            <View
                className={'basis-1/5 items-center justify-center bg-slate-500 border-2 rounded-full h-20 w-20 absolute bottom-0 z-30 self-center'}
            >
                <Text className="">Tasks</Text>
            </View>
            <View className="flex flex-row bg-slate-300">
                <View className={navBarTailwind + ' border-r-2 border-slate-400'}>
                    <Text>Vault</Text>
                </View>
                <View className={navBarTailwind}>
                    <Text>Store</Text>
                </View>
                <View className={navBarTailwind}>
                </View>
                <View className={navBarTailwind + ' border-r-2 border-slate-400'}>
                    <Text>Stuff</Text>
                </View>
                <View className={navBarTailwind}>
                    <Text>Settings</Text>
                </View>
            </View>
        </View>
    )
}

export default NavBar