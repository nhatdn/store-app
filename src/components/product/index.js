import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import {  SecondaryCard, Heart } from "../../icons";
import { COLOR } from "../../constants";

export function Product({ onPress, end, linkImage, fakePrice, realPrice, name, discount, amount}) {
    return (
        <View style={{...styles.containerProduct, ...(end && {borderBottomWidth : 0})}}>
            <View style={styles.wrapperImageProduct}>
                <Image style={styles.imageProduct} source={{uri: linkImage}}/>
                <TouchableOpacity style={styles.addToListLove}>
                    <Heart fill="white" stroke="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapperDescriptionProduct}>
                <Text style={styles.nameProduct}>{name}</Text>
                <View style={styles.containerPrice}>
                    <Text style={styles.realPrice}>$ {realPrice}</Text>
                    <Text style={styles.fakePrice}>$ {fakePrice}</Text>
                </View>
                <View style={styles.containerAmount}>
                    <Text style={styles.amount}>Số lượng: {amount}</Text>
                </View>
                <View style={styles.containerDiscount}>
                    <Text style={styles.discount}>Giảm: {discount}%</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={styles.btnAddToCard}>
                    <SecondaryCard/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 100,
        height: 120,
        borderBottomColor: COLOR.GREY_DARK,
        borderBottomWidth: 1,
        marginTop: 20,
        paddingBottom: 20,
    },
    wrapperImageProduct: {
        flex: 1,
        backgroundColor: COLOR.GREY_LIGHT,
        height: '100%',
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        position: "relative"
    },
    imageProduct: {
        resizeMode: 'cover',
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '100%',
        height: '100%'
    },
    wrapperDescriptionProduct: {
        height: '100%',
        flex: 2,
        marginLeft: 15,
        position: 'relative'
    },
    nameProduct: {
        fontWeight: '300',
        fontSize: 16,
        color: COLOR.GREEN_DARK
    },
    discount: {
        color: COLOR.ORANGE,
        fontSize: 12,
        fontWeight: '400'
    },
    amount: {
        padding: 5,
        paddingLeft: 0,
        fontSize: 12,
        fontWeight: '300'
    },
    containerPrice: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnAddToCard: {
        backgroundColor: COLOR.GREEN,
        height: 45,
        width: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 2,
        right: 2
    },
    realPrice: {
        fontWeight: "800",
        fontSize: 13,
        paddingRight: 10
    },
    fakePrice: {
        textDecorationLine: 'line-through',
        color: COLOR.DARK,
        fontSize: 12,
        fontWeight: '100'
    },
    addToListLove: {
        backgroundColor: '#FF6464',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        position: 'absolute',
        top: 0,
        left: 0
    }
})