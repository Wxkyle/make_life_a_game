import { Provider } from "jotai";
import { Suspense } from "react";
import { View } from "react-native";
import TestComponent from "./src/app/test";

export default function App() {
  console.log("thing");

  return (
    <Suspense>
      <Provider>
        <View className="flex-1 items-center justify-center bg-lime-700">
          <TestComponent />
        </View>
      </Provider>
    </Suspense>
  );
}
