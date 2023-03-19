import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

export function Center({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 25,
        paddingRight: 25,
    }
})