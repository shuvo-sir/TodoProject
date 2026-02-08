import { createSettingsStyles } from "@/assets/styles/settings.styles";
import ProgressStates from "@/components/ProgressStates";
import useTheme from "@/hook/useThemes";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView style={settingsStyles.safeArea}>
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#fff" />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStates />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default Settings;
