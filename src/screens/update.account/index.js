import React from "react";
import { Primary } from "../../layouts"
import { Stack, Avatar, Button } from "@react-native-material/core";
import { Input, Label } from "../../components";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { COLOR } from "../../constants";

export function UpdateAccount({navigation}) {
    const handleChangeRoute = () => {
        navigation.navigate("PostProduct");
    }
    const handleLogout = () => {
        navigation.navigate("Login");
    }
    return (
        <Primary title={"Cập nhật thông tin"}>
            <ScrollView style={styles.container}>
                <Stack style={styles.containerAvatar} center spacing={10}>
                    <Avatar label="Jed Watson" size={120} />
                    <Text style={styles.name}>Hoắc Nguyên Giáp</Text>
                    <Text style={styles.email}>nguyengiap@gmail.com</Text>
                </Stack>
                <View>
                    <Label>Name:</Label>
                    <Input placeholder="Hoắc Nguyên Giáp"></Input>
                </View>
                <View>
                    <Label>Email:</Label>
                    <Input placeholder="nguyengiap@gmail.com"></Input>
                </View>
                <View>
                    <Label>Địa chỉ:</Label>
                    <Input placeholder="334/47B đường Lê Quang Định, quận 11, TP. Hồ Chí Minh"></Input>
                </View>
                <View>
                    <Label>Số điện thoại:</Label>
                    <Input keyboardType='numeric' placeholder="Phone number"></Input>
                </View>
                <View>
                    <Label>Mật khẩu:</Label>
                    <Input secureTextEntry placeholder="*********"></Input>
                </View>
                <View style={styles.containerBtn}>
                    <Button onPress={handleLogout} style={styles.btn} size={40} uppercase title="Đăng suất" color={COLOR.ORANGE} tintColor={COLOR.WHITE} />
                    <Button onPress={handleChangeRoute} style={styles.btn} uppercase title="OK" color={COLOR.GREEN} tintColor={COLOR.WHITE} />
                </View>
            </ScrollView>
        </Primary>
        
    )
}
const styles = StyleSheet.create({
    containerAvatar: {
        marginTop: 10
    },
    container: {
        padding : 15,
    },
    name: {
        fontSize: 20,
        fontWeight: 400
    },
    email: {
        fontSize: 12,
        fontWeight: 200
    },
    containerBtn: {
        paddingBottom: 40,
        marginTop: 20,
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn: {
        paddingTop: 5,
        paddingBottom: 5,
        width: 150
    }
})