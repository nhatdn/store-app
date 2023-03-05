import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Input, Button, Title, Description } from "../../components";
import { Authentication } from "../../layouts";
import { Key } from "../../icons";

export function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState('');
    const handleForgotPassword = () => {
        console.log(email);
        navigation.navigate("ConfirmAccount")
    }
    const handleRegister = () => {
        navigation.navigate("Register")
    }
    const handleLogin = () => {
        navigation.navigate("Login")
    }
    return (
        <Authentication>
            <Title>Lấy lại tài khoản</Title>
            <Description>Vui lòng nhập email đã đăng ký tài khoản của bạn!</Description>
            <Input onChangeText={setEmail} icon={<Key/>} style={styles.email} placeholder="example@gmail.com"></Input>
            <Button onPress={handleForgotPassword} style={styles.btnConfirm} dark>Xác nhận</Button>
            <View style={styles.container}>
                <Description style={styles.textCenter}>Bạn muốn đăng nhập lại?</Description>
                <Button style={styles.btnSign} onPress={handleLogin}>Đăng nhập</Button>
                <Description style={styles.textCenter}>Bạn muốn đăng ký tài khoản mới?</Description>
                <Button style={styles.btnSign} onPress={handleRegister} >Đăng ký</Button>
            </View>
        </Authentication>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
    email: {
        marginTop: 30,
    },
    btnConfirm: {
        marginTop: 15,
    },
    btnSign: {
        marginTop: 6,
    },
    textCenter: {
        marginTop: 15,
        textAlign: 'center'
    }
})