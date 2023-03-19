import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { BackScreen } from "../../icons";
import { Title, KeyboardAvoidingView } from "../../components";

import { Stack } from "@react-native-material/core";

import { useNavigation } from '@react-navigation/native';

export function Primary({title, children, none, iconRight, ...res}) {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.wrapper}>
            <Stack style={none ? { padding : 15, paddingTop: 25 } : styles.containerHeader}>
                <TouchableOpacity onPress={handleGoBack} style={styles.buttonBack}>
                    <BackScreen {...res}/>
                </TouchableOpacity>
                <Title>{title}</Title>
                {iconRight}
            </Stack>
            <KeyboardAvoidingView>
                {children}
            </KeyboardAvoidingView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    containerHeader: {
        paddingTop: 25,
        padding : 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonBack: {
        paddingBottom: 10,
        paddingTop: 5,
        paddingRight: 15,
    },
    title: {
        flex: 1,
        color: 'red',
        textAlign: 'left',
    }
})