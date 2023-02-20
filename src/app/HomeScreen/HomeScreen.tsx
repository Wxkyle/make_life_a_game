
import { View } from "react-native";
import NavBar from "../NavBar/NavBar";

const HomeScreen = () => {

    const [currentScreen, setCurrentScreen] = useState('')

    const navigation



    return (
        <View className="h-full w-full flex-col items-center bg-green-200 relative">
            <View className="absolute bottom-0">
                <NavBar></NavBar>
            </View>
        </View>
    )
}

export default HomeScreen