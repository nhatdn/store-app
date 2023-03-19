import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Primary } from "../../layouts";
import { CartItem } from "../../components";
import { COLOR } from "../../constants";

const imageURL = "https://raw.githubusercontent.com/My-Food-App/backEnd_FoodApp/main/temp.jpg?token=GHSAT0AAAAAAB75AHVM3UF4MK6QLAGYQSRQZAUOSTQ";
export function Cart({navigation}) {
    return (
        <Primary title="Giỏ hàng">
            <ScrollView style={styles.container}>
                <View style={styles.containerCartItems}>
                    <CartItem linkImage={imageURL} fakePrice={2.0} realPrice={1.0} name="Vision 2020" discount="10" categoryName="Máy tính"/>
                    <CartItem linkImage={imageURL} fakePrice={2.0} realPrice={1.0} name="Vision 2020" discount="10" categoryName="Máy tính"/>
                    <CartItem end  linkImage={imageURL} fakePrice={2.0} realPrice={1.0} name="Vision 2020" discount="10" categoryName="Máy tính"/>
                </View>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.nameTitle}>Tổng phụ</Text>
                        <Text style={styles.value}>$54.76</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.nameTitle}>Thuế (2%)</Text>
                        <Text style={styles.value}>-$1.08</Text>
                    </View>
                    <View style={{...styles.row, ...styles.containerTotal}}>
                        <Text style={styles.realTotal}>Tổng thực</Text>
                        <Text style={styles.valueCart}>$53.68</Text>
                    </View>
                    <View style={{...styles.row, ...styles.containerDiscount}}>
                        <Text style={styles.nameTitle}>Áp dụng mã khuyến mãi</Text>
                        <Text style={styles.promos}>2 Promos</Text>
                    </View>
                </View>
                <View style={styles.row}>
                        <TouchableOpacity style={styles.btnPayment}>
                            <Text style={styles.textBtnPayment}>thủ tục thanh toán</Text>
                        </TouchableOpacity>
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
    containerCartItems: {
        borderBottomColor: COLOR.GREY_DARK,
        borderStyle: 'dashed',
        borderBottomWidth: 1,
        marginBottom: 30
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nameTitle: {
        paddingTop: 5,
        paddingBottom: 5,
        color: COLOR.SOFT,
        fontSize: 14,
        fontWeight: '600'
    },
    value: {
        color: COLOR.SOFT,
        fontSize: 14,
        fontWeight: '700'
    },
    realTotal: {
        color: COLOR.DARK,
        fontSize: 18,
        fontWeight: '700'
    },
    valueCart: {
        color: COLOR.DARK,
        fontSize: 18,
        fontWeight: '700'
    },
    promos: {
        color: COLOR.GREEN,
        fontSize: 14,
        fontWeight: '700'
    },
    containerTotal: {
        marginTop: 10,
        marginBottom: 10
    },
    containerDiscount: {
        backgroundColor: COLOR.PRIMARY_LIGHT,
        marginTop: 15,
        padding: 5,
        borderRadius: 5,
        paddingRight: 15,
        paddingLeft: 15,
    },
    btnPayment: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 15,
        backgroundColor: COLOR.GREEN,
        marginTop: 15,
        borderRadius: 10,
        marginBottom: 50
    },
    textBtnPayment: {
        fontSize: 16,
        fontWeight: '800',
        color: COLOR.WHITE,
        textTransform: 'uppercase'
    }
})