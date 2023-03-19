import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Minus, Plus } from "../../icons";
import { COLOR } from "../../constants";

export function CartItem({ onPress, end, linkImage, fakePrice, realPrice, name, discount, categoryName}) {
    return (
        <View style={{...styles.containerProduct, ...(end && {borderBottomWidth : 0})}}>
            <View style={styles.wrapperImageProduct}>
                <Image style={styles.imageProduct} source={{uri: linkImage}}/>
            </View>
            <View style={styles.wrapperDescriptionProduct}>
               <View>
                    <Text style={styles.nameProduct}>{name}</Text>
                    <View style={styles.containerAmount}>
                        <Text style={styles.categoryName}>{categoryName}</Text>
                    </View>
               </View>
                <View style={styles.containerPrice}>
                    <Text style={styles.realPrice}>$ {realPrice}</Text>
                    <Text style={styles.fakePrice}>$ {fakePrice}</Text>
                </View>
                <View style={styles.btnAddToCard}>
                    <TouchableOpacity style={styles.minus}>
                        <Minus/>
                    </TouchableOpacity>
                    <Text style={styles.amount}>3</Text>
                    <TouchableOpacity style={styles.plus}>
                        <Plus/>
                    </TouchableOpacity>
                </View>
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
        borderRadius: 15,
        borderColor: COLOR.GREY_DARK,
        borderWidth: 2,
        position: "relative",
        padding: 3
    },
    imageProduct: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 12,
    },
    wrapperDescriptionProduct: {
        height: '100%',
        flex: 2,
        marginLeft: 15,
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        
    },
    nameProduct: {
        fontWeight: '600',
        fontSize: 18,
        color: COLOR.DARK
    },
    discount: {
        color: COLOR.ORANGE,
        fontSize: 12,
        fontWeight: '400'
    },
    categoryName: {
        textAlign: 'left',
        color: COLOR.SOFT,
        fontSize: 14,
        fontWeight: '400'
    },
    containerPrice: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnAddToCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', 
        position: 'absolute',
        bottom: 2,
        right: 2
    },
    realPrice: {
        fontWeight: "700",
        fontSize: 16,
        color: COLOR.BLACK,
        paddingRight: 10
    },
    fakePrice: {
        textDecorationLine: 'line-through',
        color: COLOR.GREY_DARK,
        fontSize: 14,
        fontWeight: '400'
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
    },
    containerAmount: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    minus: {
        borderColor: COLOR.GREY_LIGHT,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: 42,
        height: 42,
        borderRadius: 12
    },
    plus: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: COLOR.PRIMARY_LIGHT
    },
    amount: {
        color: COLOR.BLACK,
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 15,
        marginRight: 15
    },
})