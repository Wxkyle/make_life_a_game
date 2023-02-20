
import { useAtom } from "jotai";
import { atomsWithQuery } from "jotai-urql";
import { Button, Text, View } from "react-native";
import { createClient } from "urql";

const env = require("../../env.json");

interface usersData {
  user: {
    name: string
    id: string
  }
}

console.log("⭕");
const client = createClient({
  url: "https://firm-coyote-30.hasura.app/v1/graphql",
  fetchOptions: () => {
    return {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': env.ADMIN_SECRET
      },
    };
  }
});

console.log("⭕⭕", client);
const query = `
  query MyQuery {
    user {
      id
      name
    }
  }
  `;

console.log("⭕⭕⭕", query);
const [userQueryAtom] = atomsWithQuery(
  query, //query
  () => { }, //variables
  undefined, //context
  () => client
);

console.log("⭕⭕⭕⭕", userQueryAtom);
const TestComponent = () => {
  const [data] = useAtom(userQueryAtom);

  const usersData: usersData = data?.user

  console.log("⭕⭕⭕⭕⭕", usersData);

  return (
    <View className="h-full w-full flex-col items-center bg-red-700">
      {usersData?.map((user: { name: string, id: string }) => {
        return <Text className={'bg-yellow-600 text-zinc-100 w-20 h-20'}>{user?.name}</Text>
      })}
      <View className="flex-row bottom-0">
        <View className="h-20 w-20 bg-green-200 items-center justify-center">
          <Button title="Button" onPress={() => { }} />
        </View>
        <View className="bg-blue-200 w-20 h-20"></View>
      </View>
    </View>
  )
}

export default TestComponent