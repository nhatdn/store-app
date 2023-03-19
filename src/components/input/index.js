import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import { COLOR } from "../../constants";
export function Input({style, styleInput, icon, backIcon, placeholder, secureTextEntry, ...res}) {
    return (
        <View style={{...styles.containerInput, ...style}}>
          {icon && (
            <Text style={styles.icon}>
              {icon}
            </Text>
          )}
          <TextInput {...res} placeholder={placeholder} secureTextEntry={secureTextEntry} style={{...styles.input, ...styleInput}}></TextInput>
          {backIcon && (
            <Text style={styles.backIcon}>
              {backIcon}
            </Text>
          )}
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
      position: 'relative',
      width: '100%',
      zIndex: 1000
    },
    icon: {
      position: 'absolute',
      top: 18,
      left: 12,
      zIndex: 1,
    },
    backIcon: {
      position: 'absolute',
      top: 18,
      right: 12,
      zIndex: 1,
    },
    input: {
      width: '100%',
      backgroundColor: COLOR.GREY_LIGHT,
      color: COLOR.BLACK,
      minHeight: 50,
      borderRadius: 10,
      paddingLeft: 40,
      paddingRight: 10,
    }
})