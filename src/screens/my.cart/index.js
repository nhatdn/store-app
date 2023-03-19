import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { COLOR } from "../../constants";
import { Glass, Goods, SingleArrowRight, Home, Cart, Heart, DoubleArrow } from "../../icons";


const array = [0, 1,2,3,4,5,6,7,8];
export function MyCart({navigation}) {
    const [tab, setTab] = useState(0);
    const [isShowDetail, seShowDetail] = useState(0);

    const handleGoHome = () => {
        navigation.navigate("Home");
    }
    const handleGoListCategories = () => {
        navigation.navigate("Categories")
    }
    const handleGoMyAccount = () => {
        navigation.navigate("UpdateAccount");
    }
    const handleGoPostProduct = () => {
        navigation.navigate("PostProduct");
    }
    return (
        <View style={{ position: 'relative'}}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Đơn hàng của tôi</Text>
                <TouchableOpacity>
                    <Glass/>
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.wrapperHeaderTabs}>
                    {
                        tabList.map(({name, containerStyle, icon, childStyle, activeContainer, activeChild}, index) => (
                            <TouchableOpacity onPress={() => setTab(index)} key={index} style={{...styles.itemHeader, ...(tab == index ? activeContainer : containerStyle)}}>
                                {icon}
                                <Text style={(tab == index ? activeChild : childStyle)}>{name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View> 
            <ScrollView>
                <View style={styles.containerBodyTabs}>
                    {
                        array.map(index => (
                            <View key={index} style={styles.containerGoods}>
                                <TouchableOpacity onPress={() => seShowDetail(pre => pre == index ? -1 : index)} style={{...styles.wrapperBaseGoods, ...(isShowDetail == index ? styles.wrapperBaseGoodsActive : undefined)}}>
                                    <View style={styles.contaienrIconGoods}>
                                        <Goods/>
                                    </View>
                                    <View style={styles.containerCodeGoods}>
                                        <Text style={styles.textCode}>Mã Hàng #02020</Text>
                                        <View style={styles.containerDescription}>
                                            <Text style={styles.amountGoods}>12 Sản phẩm</Text>
                                            <View style={styles.iconList}></View>
                                            <Text style={styles.statusGoods}>Đang giao</Text>
                                        </View>
                                    </View>
                                    <View style={isShowDetail == index ? styles.containerIconMenuActive : styles.containerIconMenu}>
                                        <SingleArrowRight/>
                                    </View>
                                </TouchableOpacity>
                                {
                                    isShowDetail == index && (
                                        <View style={styles.containerDetailGoods}>
                                            <View style={styles.wrapperTime}>
                                                <View style={styles.styleList}></View>
                                                <View>
                                                    <Text style={styles.typeTime}>Thời gian đặt hàng</Text>
                                                    <Text style={styles.valueTime}>12:01 Ngày 12/12/2023</Text>
                                                </View>
                                            </View>
                                            <View style={styles.wrapperTime}>
                                                <View style={styles.styleList}></View>
                                                <View>
                                                    <Text style={styles.typeTime}>Xác nhận đơn hàng</Text>
                                                    <Text style={styles.valueTime}>12:01 Ngày 12/12/2023</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                            </View>
                        ))
                    }
                    
                </View>
                <View style={styles.showFull}></View>
            </ScrollView>
            <View style={{ position: 'absolute', zIndex: 222222, bottom: 133, left: 0, flex: 1, width: '100%', backgroundColor: 'white', paddingVertical: 5, borderTopWidth: 1, borderTopColor: COLOR.GREY_LIGHT}}>
                <View style={styles.containerMenu}>
                    <TouchableOpacity onPress={handleGoHome}>
                        <Home/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoListCategories}>
                        <DoubleArrow/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Cart/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoPostProduct}>
                        <Heart/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoMyAccount}>
                        <Image style={{width: 30, height: 30, resizeMode: 'cover', borderRadius: 50, borderWidth: 1, borderColor: COLOR.GREY_LIGHT}} source={require('../../assets/image.jpg')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: COLOR.DARK,
        fontWeight: '700',
        fontSize: 24
    },
    wrapperHeaderTabs: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    itemHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
        marginLeft: 10, 
        borderBottomWidth: 3,
    },
    containerChildTab: {
        borderBottomColor: COLOR.GREY_LIGHT,
    },
    activeContainer: {
        borderBottomColor: COLOR.DARK,
    },
    active: {
        fontWeight: '600',
        color: COLOR.DARK,
        fontSize: 16,
    },
    titleTab: {
        fontSize: 16,
    },
    iconDone: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: COLOR.GREEN,
        marginRight: 5,
    },
    iconCancel: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: COLOR.RED,
        marginRight: 5,
    },
    iconProces: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: COLOR.ORANGE,
        marginRight: 5,
    },
    containerBodyTabs: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    containerGoods: {
        paddingTop: 20,
    },
    wrapperBaseGoods: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',        
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.GREY_LIGHT
    },
    wrapperBaseGoodsActive: {
        borderBottomWidth: 0,
    },
    contaienrIconGoods: {
        marginRight: 15,
        width: 50,
        height: 50,
        backgroundColor: COLOR.ORANGE_LIGHT,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCodeGoods: {
        flex: 1,
    },
    textCode: {
        color: COLOR.DARK,
        fontSize: 16,
        fontWeight: '700'
    },
    containerDescription: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    amountGoods: {
        color: COLOR.SOFT,
        fontWeight: '600',
        fontSize: 14,
    },
    statusGoods: {
        color: COLOR.SOFT,
        fontWeight: '600',
        fontSize: 14,
    },
    iconList: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: COLOR.SOFT,
        margin: 10,
    },
    containerIconMenu: {
        transform: [{ rotate: '90deg'}],
        marginRight: 15
    },
    containerIconMenuActive: {
        transform: [{ rotate: '-90deg'}],
        marginRight: 15
    },
    containerDetailGoods: {
        padding: 20,
        paddingTop: 0,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.GREY_LIGHT
    },
    styleList: {
        width: 16,
        height: 16,
        borderRadius: 10,
        backgroundColor: COLOR.GREEN,
        marginRight: 16,
        marginTop: 5
    },
    wrapperTime: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20
    },
    typeTime: {
        color: COLOR.DARK,
        fontSize: 16,
        fontWeight: '700'
    },
    valueTime: {
        fontSize: 12,
        fontWeight: '500',
        color: COLOR.SOFT,
        paddingTop: 8
    },
    showFull: {
        paddingBottom: 120,
    },

    containerMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

const tabList = [
    {
        name: "Tất cả",
        containerStyle: styles.containerChildTab,
        icon: null,
        childStyle: styles.titleTab,
        activeChild: styles.active,
        activeContainer: styles.activeContainer
    },
    {
        name: "Đang giao",
        containerStyle: styles.containerChildTab,
        icon:  <View style={styles.iconProces}></View>,
        childStyle: styles.titleTab,
        activeChild: styles.active,
        activeContainer: styles.activeContainer
    },
    {
        name: "Hoàn thành",
        containerStyle: styles.containerChildTab,
        icon: <View style={styles.iconDone}></View>,
        childStyle: styles.titleTab,
        activeChild: styles.active,
        activeContainer: styles.activeContainer
    },
    {
        name: "Hủy",
        containerStyle: styles.containerChildTab,
        icon: <View style={styles.iconCancel}></View>,
        childStyle: styles.titleTab,
        activeChild: styles.active,
        activeContainer: styles.activeContainer
    }
]