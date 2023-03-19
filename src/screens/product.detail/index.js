import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from "../../constants";
import { Star, Ship, Minus, Plus, HeartActive, SecondaryCard, BackScreen  } from "../../icons";
import { useState } from "react";

const width = Dimensions.get("window").width - 40;
const height = width * 100 / 130;

export function ProductDetail({navigation}) {
    const [activeHeart, setActiveHeart] = useState(false);
    const [amountProducts, setAmountsProduct] = useState(0);
    const handleBack = () => {
        navigation.goBack();
    }
    const handleActiveHeart = () => {
        setActiveHeart(!activeHeart);
    }
    const handleAddAmountProduct = () => {
        setAmountsProduct(amountProducts + 1);
    }
    const handleMinusAmountProduct = () => {
        if(amountProducts > 1)
        setAmountsProduct(amountProducts - 1);
    }
    return (
        <LinearGradient colors={['#8A8A8A', '#ffffff']} style={styles.container}>
            <View style={styles.containerHeader}>
                <TouchableOpacity onPress={handleBack}>
                    <BackScreen fill="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleActiveHeart}>
                    <HeartActive fill= {activeHeart ? COLOR.WHITE: COLOR.RED }/>
                </TouchableOpacity>
            </View>
            <View style={{marginRight: 20, marginLeft: 20, flex: 1}}>
                <View style={{ marginTop: 10, height, width}}>
                    <ScrollView pagingEnabled showsHorizontalScrollIndicator={false} horizontal style={{width, height}}>
                        <Image style={styles.imageSlider} source={require("../../assets/temp.jpg")}/>
                        <Image style={styles.imageSlider} source={require("../../assets/image.jpg")}/>
                        <Image style={styles.imageSlider} source={require("../../assets/temp.jpg")}/>
                        <Image style={styles.imageSlider} source={require("../../assets/image.jpg")}/>
                    </ScrollView>
                    <View style={styles.containerPagination}>
                        <TouchableOpacity style={styles.pagination}></TouchableOpacity>
                        <TouchableOpacity style={styles.pagination}></TouchableOpacity>
                        <TouchableOpacity style={styles.pagination}></TouchableOpacity>
                        <TouchableOpacity style={styles.pagination}></TouchableOpacity>
                        <TouchableOpacity style={styles.pagination}></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.containerInfoProduct}>
                <ScrollView style={styles.wrapperInfoProduct}>
                    <Text style={styles.nameCategory}>Xe máy</Text>
                    <Text style={styles.nameProduct}>SH 2022</Text>
                    <Text style={styles.descriptionProduct}>SH 2022 là loại xe được nhập từ Mỹ. Được nhập khẩu nguyên chiếc về Việt Nam với các khẩu quản lí và kiểm tra nghiêm ngặt, đảm bảo chất lượng tốt đến tay khách hàng.</Text>
                    <View>
                        <View style={styles.containerEvaluate}>
                            <Star full width={20} height={20}/>
                            <Text style={styles.textEvaluate}>4.6 (89 đánh giá)</Text>
                        </View>
                        <View style={styles.containerEvaluate}>
                            <Ship/>
                            <Text  style={styles.freeShip}>Giao hàng miễn phí</Text>
                        </View>
                    </View>
                    <View style={styles.containerPriceAndAmount}>
                        <View style={styles.containerPrice}>
                            <Text style={styles.priceText}>Giá</Text>
                            <View style={styles.containerMoney}>
                                <Text style={styles.realPrice}>$5.8</Text>
                                <Text style={styles.fakePrice}>$5.8</Text>   
                            </View>
                        </View>
                        <View style={styles.containerAmount}>
                            <TouchableOpacity onPress={handleMinusAmountProduct} style={styles.minus}>
                                <Minus/>
                            </TouchableOpacity>
                            <Text style={styles.amount}>{amountProducts}</Text>
                            <TouchableOpacity onPress={handleAddAmountProduct} style={styles.plus}>
                                <Plus/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerAddToCard}>
                        <View style={styles.wrapperDiscount}>
                            <Text style={styles.discount}>Giảm giá đến 20%</Text>
                        </View>
                        <TouchableOpacity style={styles.btnAddToCard}>
                            <SecondaryCard/>
                            <Text style={styles.textAddToCard}>Thêm vào giỏ hàng</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
    },
    imageSlider: {
        height: height - 30,
        width,
        resizeMode: 'cover',
        borderRadius: 15,
        borderWidth: 6,
        borderColor: COLOR.GREY_LIGHT,
    },
    containerSlider: {
        flex: 1,
        backgroundColor: 'red',
        maxHeight: 260
    },
    containerHeader: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    containerPagination: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    pagination: {
        backgroundColor: COLOR.WHITE,
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: 5
    },


    containerInfoProduct: {
        flex: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: COLOR.WHITE,
        paddingTop: 20,
    },
    wrapperInfoProduct: {
        padding: 25,
        paddingTop: 10
    },
    nameCategory: {
        color: "#28B0CE",
        fontSize: 16,
        fontWeight: 300,
        textTransform: 'uppercase',
    },
    nameProduct: {
        marginTop: 10,
        marginBottom: 10,
        color: COLOR.BLACK,
        fontWeight: '500',
        fontSize: 20
    },
    descriptionProduct: {
        fontSize: 14,
        fontWeight: '400',
        color: COLOR.DARK,
        lineHeight: 20
    },
    containerEvaluate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    textEvaluate: {
        marginLeft: 10,
        color: COLOR.DARK,
        fontSize: 14,
        fontWeight: '700'
    },
    freeShip: {
        marginLeft: 8,
        color: COLOR.GREEN,
        fontSize: 14,
        fontWeight: '700'
    },
    containerAmount: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerPriceAndAmount: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: COLOR.GREY_DARK,
        borderStyle: 'dashed',
        borderBottomWidth: 1,
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
    containerAddToCard: {
        marginTop: 10,
        paddingBottom: 50,        
    },
    textAddToCard: {
        color: COLOR.WHITE,
        fontWeight: '800',
        fontSize: 16,
        textTransform: 'uppercase',
        marginLeft: 10,
    },
    btnAddToCard: {
        backgroundColor: COLOR.GREEN,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 15
    },
    wrapperDiscount: {
        borderRadius: 20,
        backgroundColor: COLOR.ORANGE,
        padding: 5,
        marginTop: 10,
    },
    discount: {
        color: COLOR.WHITE,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
    },
    realPrice: {
        color: COLOR.DARK,
        fontSize: 24,
        fontWeight: '700'
    },
    priceText: {
        color: COLOR.SOFT,
        fontSize: 14,
        fontWeight: '500'
    },
    fakePrice: {
        color: COLOR.SOFT,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },
    containerMoney: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})