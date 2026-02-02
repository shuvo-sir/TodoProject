import useTheme from "@/hook/useThemes";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarActiveTintColor: "tomato",

        // tabBarItemStyle: {
        //   width: "100%",
        //   height: "100%",
        //   justifyContent: "center",
        //   alignItems: "center",
        // },
        // tabBarStyle: {
        //   backgroundColor: "#0f0D23",
        //   borderRadius: 50,
        //   marginHorizontal: 20,
        //   marginBottom: 36,
        //   height: 50,
        //   position: "absolute",
        //   overflow: "hidden",
        //   borderWidth: 1,
        //   borderColor: "#0f0D23",
        //   paddingHorizontal: 6,
        // },

        tabBarStyle: {
          // backgroundColor: "#0f0D23",
          backgroundColor: colors.surface,
          borderRadius: 30,
          marginHorizontal: 20,
          marginBottom: 35,
          height: 55,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "tomato",
          paddingHorizontal: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="flash-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
