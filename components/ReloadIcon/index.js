import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils";

export default function ReloadIcon({ reload }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={reload}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 45,
    right: 20,
  },
});
