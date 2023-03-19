import React from "react";
import { Primary } from "../../layouts"
import { View, ScrollView, StyleSheet } from "react-native";
import { Input, Label } from "../../components";
import { Button } from "@react-native-material/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLOR } from "../../constants";
import { Add } from "../../icons";
export function PostProduct({ navigation }) {
    const handleUpdate = () => {
        navigation.navigate('Home')
    }
    return (
        <Primary title={"Đăng sản phẩm"}>
            <ScrollView style={styles.container}>
                <View>
                    <Label>Tên sản phẩm:</Label>
                    <Input styleInput={styles.styleInputNotIcon} placeholder="Thiết bị A"></Input>
                </View>
                <View>
                    <Label>Loại sản phẩm:</Label>
                    <Input styleInput={styles.styleInputNotIcon} placeholder="Thiết bị A"></Input>
                </View>
                <View>
                    <Label>Số lượng:</Label>
                    <Input styleInput={styles.styleInputNotIcon} placeholder="Thiết bị A"></Input>
                </View>
                <View>
                    <Label>Giá:</Label>
                    <Input styleInput={styles.styleInputNotIcon} placeholder="Thiết bị A"></Input>
                </View>
                <View>
                    <Label>Mô tả sản phẩm:</Label>
                    <Input styleInput={styles.styleInput} multiline={true} numberOfLines={4}  placeholder="Thiết bị A"></Input>
                </View>
                <View>
                    <Label>Hình ảnh sản phẩm:</Label>
                    <View style={styles.containerImage}>
                        <TouchableOpacity style={styles.btnGetImage}><Add/></TouchableOpacity>
                        <TouchableOpacity style={styles.btnGetImage}><Add/></TouchableOpacity>
                        <TouchableOpacity style={styles.btnGetImage}><Add/></TouchableOpacity>
                        <TouchableOpacity style={styles.btnGetImage}><Add/></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerBtn}>
                    <Button style={styles.btn} size={40} uppercase title="hủy" color={COLOR.ORANGE} tintColor={COLOR.WHITE} />
                    <Button onPress={handleUpdate} style={styles.btn} uppercase title="cập nhật" color={COLOR.GREEN} tintColor={COLOR.WHITE} />
                </View>
            </ScrollView>
            
        </Primary>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    containerImage: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    btnGetImage: {
        flex: 1,
        width: 150,
        marginBottom: 10,
        minHeight: 100,
        backgroundColor: COLOR.GREY_LIGHT,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    styleInputNotIcon : {
        paddingLeft: 10,
        paddingRight: 10,
    },
    styleInput: {
        height: 140,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
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
        width: 130
    }
})