
import { useState } from "react";
import { Text, View } from "react-native";
import CheckBox from 'expo-checkbox';

const GoalsWithCheckbox = () => {
    const goals = [
        { name: 'goal1' },
        { name: 'goal2' },
        { name: 'goal3' },
        { name: 'goal4' }
    ]

    return (
        <View className="bg-red-300 grid grid-flow-col">
            {goals.map((goal) => {
                const [toggleCheckBox, setToggleCheckBox] = useState(false)
                return (
                    <View className="bg-red-300 grid-cols-2">
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(boolean) => setToggleCheckBox(boolean)}
                        />
                        <Text>{goal.name}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default GoalsWithCheckbox