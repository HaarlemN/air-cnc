import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";

import { AuthContext } from "./context";

import api from "../services/api";

import Login from "../pages/Login";
import List from "../pages/List";
import Book from "../pages/Book";

const Stack = createStackNavigator();

export default function Routes() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user_id").then((user) => {
      setStatus(user);
    });
  }, []);

  const authContext = useMemo(() => {
    return {
      signIn: async (email, techs) => {
        try {
          const response = await api.post("/sessions", {
            email,
          });

          const { _id } = response.data;

          await AsyncStorage.setItem("user_id", _id);
          await AsyncStorage.setItem("techs", techs);
          setStatus(_id);
        } catch (err) {}
      },
      signOut: () => {},
    };
  });

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!status ? (
          <Stack.Screen name="login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="list" component={List} />
            <Stack.Screen name="book" component={Book} />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
