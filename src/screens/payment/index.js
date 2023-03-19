import React from "react";
import { Primary } from "../../layouts";
import { Label, Input } from "../../components";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import { COLOR } from "../../constants";
import { Done } from "../../icons";
export function Payment({navigation}) {
    const handlePayment = () => {
        navigation.navigate("Search");
    }
    return (

        <Primary title={"Thanh toán"}>
            <ScrollView style={styles.container}>
                <View style={styles.containerPagination}>
                    <View style={styles.paginationStep}>
                        <Done/>
                    </View>
                    <View style={styles.paginationLine}></View>
                    <View style={styles.paginationStep}><View style={styles.fakeIconDoing}/></View>
                    <View style={styles.paginationLine}></View>
                    <View style={styles.paginationStep}></View>
                </View>
                <View style={styles.containerStepLabel}>
                    <Text style={styles.labelStep}>Vận chuyển</Text>
                    <Text style={styles.labelStep}>Địa chỉ</Text>
                    <Text style={styles.labelStep}>Thanh toán</Text>
                </View>
                <View>
                    <Label>Họ và tên</Label>
                    <Input styleInput={styles.notIcon} placeholder={"Hoắc Nguyên Giáp"}></Input>
                </View>
                <View>
                    <Label>Địa chỉ email</Label>
                    <Input styleInput={styles.notIcon} placeholder={"nguyengiap@gmail.com"}></Input>
                </View>
                <View>
                    <Label>Số điện thoại</Label>
                    <Input styleInput={styles.notIcon} placeholder={"0987654321"}></Input>
                </View>
                <View>
                    <Label>Địa chỉ</Label>
                    <Input styleInput={styles.notIcon} placeholder={"334 Lê Quang Nghị"}></Input>
                </View>
                <View style={styles.twoRow}>
                    <View style={styles.postOfficeAndCity}>
                        <Label>Mã bưu chính</Label>
                        <Input styleInput={styles.notIcon} placeholder={"25435434"}></Input>
                    </View>
                    <View style={styles.postOfficeAndCity}>
                        <Label>Thành phố</Label>
                        <Input styleInput={styles.notIcon} placeholder={"TP Hồ Chí Minh"}></Input>
                    </View>
                </View>
                <View>
                    <Label>Đất nước</Label>
                    <Input styleInput={styles.notIcon} placeholder={"Việt Nam"}></Input>
                </View>
                <View>
                    <Text style={styles.textSaveAddress}>Lưu địa chỉ giao hàng</Text>
                </View>
                <View>
                    <Button onPress={handlePayment} style={styles.btnContinue} title={<Text style={styles.textContinue}>tiếp tục</Text>} />
                </View>
            </ScrollView>
        </Primary>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop: 0
    },
    containerPagination: {
        paddingLeft: 25,
        paddingRight: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    paginationStep: {
        borderRadius: 500,
        height: 30,
        width: 30,
        backgroundColor: COLOR.GREEN,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'    },
    paginationLine: {
        height: 2,
        backgroundColor: COLOR.GREEN,
        flex: 2,
    },
    notIcon: {
        paddingLeft: 10
    },
    fakeIconDoing: {
        width: 20,
        height: 20,
        backgroundColor: COLOR.GREEN,
        borderRadius: 500,
        borderWidth: 4,
        borderColor: COLOR.WHITE,
    },
    containerStepLabel: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    labelStep: {
        color: COLOR.GREEN_DARK,
        fontSize: 14,
        fontWeight: '600',
    },
    twoRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    postOfficeAndCity: {
        flex: 1,
        maxWidth: '48%'
    },
    textSaveAddress: {
        color: COLOR.BLACK,
        fontSize: 16,
        fontWeight: '400',
        marginTop: 15,
        marginBottom: 30
    },
    btnContinue: {
        height: 50,
        backgroundColor: COLOR.GREEN,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textContinue: {
        fontSize: 18,
        fontWeight: 700,
        color: COLOR.WHITE,
        textTransform: 'uppercase'
    }
})