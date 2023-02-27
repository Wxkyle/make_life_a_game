
import { Text, View } from "react-native";
import GoalsWithCheckbox from "./GoalsWithCheckbox";

const AllGoals = () => {
    return (
        <View className="bg-red-500 grid grid-cols-1">
            <GoalsWithCheckbox />
        </View>
    )
}

export default AllGoals