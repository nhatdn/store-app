import React, { useState } from 'react';
import { Center } from "../../layouts"
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from '@react-native-material/core';
import CheckBox from "expo-checkbox";

import { Close, Star, SingleArrowRight, Tivi } from "../../icons";
import { Input } from "../../components";
import { COLOR } from "../../constants";
export function Filter({navigation}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const handleGoBack = () => {   
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.containerClose}>
                    <Close/>
                </TouchableOpacity>
                <Text style={styles.title}>
                    Bộ lọc tìm kiếm
                </Text>
                <TouchableOpacity>
                    <Text style={styles.reset}>
                        Đặt lại
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerScope}>
                <Text style={styles.subTitle}>
                    Phạm vi giá
                </Text>
                <View style={styles.scopePrice}>
                    <Input style={styles.inputScope} styleInput={styles.inputScopeInside} placeholder="Thấp nhất"/>
                    <Input style={styles.inputScope} styleInput={styles.inputScopeInside} placeholder="Cao nhất"/>
                </View>
            </View>
            <View style={styles.containerRate}>
                <Text style={styles.subTitle}>
                    Tỉ lệ đánh giá
                </Text>
                <View style={styles.wrapperStars}>
                    <View style={styles.containerStars}>
                        <TouchableOpacity>
                            <Star/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Star/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Star/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Star/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Star/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textStar}>
                            4 Sao
                    </Text>
                </View>
            </View>
            <View style={styles.wrapperOtherOptions}>
                <Text style={styles.subTitle}>Khác</Text>
                <View style={styles.containerOtherOptions}>
                    <View style={styles.otherOption}>
                        <CheckBox
                            color={COLOR.GREEN}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.titleCheckBox}>Giảm giá</Text>
                    </View>
                    <View style={styles.otherOption}>
                        <CheckBox
                            color={COLOR.GREEN}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.titleCheckBox}>Áp dụng mã</Text>
                    </View>
                    <View style={styles.otherOption}>
                        <CheckBox
                            color={COLOR.GREEN}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.titleCheckBox}>Hỗ trợ vận chuyển</Text>
                    </View>
                    <View style={styles.otherOption}>
                        <CheckBox
                            color={COLOR.GREEN}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.titleCheckBox}>Giao trong ngày</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.subTitle}>Trang</Text>
                <View>
                    <TouchableOpacity style={styles.containerCategories}>
                        <View style={styles.childItemCategory}>
                            <Tivi stroke={COLOR.GREEN}/>
                            <Text style={styles.nameCategory}>Tivi</Text>
                        </View>
                        <View style={styles.childItemCategory}>
                            <Text style={styles.countProduct}>45 loại</Text>
                            <SingleArrowRight/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerCategories}>
                        <View style={styles.childItemCategory}>
                            <Tivi stroke={COLOR.GREEN}/>
                            <Text style={styles.nameCategory}>Tivi</Text>
                        </View>
                        <View style={styles.childItemCategory}>
                            <Text style={styles.countProduct}>45 loại</Text>
                            <SingleArrowRight/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerCategories}>
                        <View style={styles.childItemCategory}>
                            <Tivi stroke={COLOR.GREEN}/>
                            <Text style={styles.nameCategory}>Tivi</Text>
                        </View>
                        <View style={styles.childItemCategory}>
                            <Text style={styles.countProduct}>45 loại</Text>
                            <SingleArrowRight/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerCategories}>
                        <View style={styles.childItemCategory}>
                            <Tivi stroke={COLOR.GREEN}/>
                            <Text style={styles.nameCategory}>Tivi</Text>
                        </View>
                        <View style={styles.childItemCategory}>
                            <Text style={styles.countProduct}>45 loại</Text>
                            <SingleArrowRight/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerCategories}>
                        <View style={styles.childItemCategory}>
                            <Tivi stroke={COLOR.GREEN}/>
                            <Text style={styles.nameCategory}>Tivi</Text>
                        </View>
                        <View style={styles.childItemCategory}>
                            <Text style={styles.countProduct}>45 loại</Text>
                            <SingleArrowRight/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button onPress={handleGoBack} style={styles.btnApply} title="Áp dụng"/>
                </View>
            </View>
        </ScrollView>  
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    title: {
        color: COLOR.BLACK,
        fontSize: 24,
        fontWeight: '700',
    },
    reset: {
        color: COLOR.ACCENT,
        fontSize: 18,
        fontWeight: '700'
    },
    containerScope: {
        paddingTop: 30,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.GREY_LIGHT
        
    },
    subTitle: {
        marginTop: 10,
        color: COLOR.DARK,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    containerClose: {
        padding: 5,
        paddingLeft: 0
    },
    scopePrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputScope: {
        flex: 1,
        maxWidth: '48%',
    },
    inputScopeInside: {
        paddingLeft: 15
    },
    containerRate: {
        marginTop: 10,
        paddingBottom: 20,
        borderBottomColor: COLOR.GREY_LIGHT,
        borderBottomWidth: 1
    },
    titleRate: {
        color: COLOR.DARK,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    containerStars: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        flex: 2,
    },
    wrapperStars: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStar: {
        textAlign: 'right',
        flex: 1,
        color: COLOR.SOFT,
        fontSize: 16,
        fontWeight: '500'
    },
    containerOtherOptions: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    otherOption: {
        flex: 1,
        minWidth: '45%',
        maxWidth: '49%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    titleCheckBox: {
        paddingLeft: 5
    },
    checkbox: {
        backgroundColor: COLOR.GREEN
    },
    wrapperOtherOptions: {
        marginTop: 10,
        paddingBottom: 20,
        borderBottomColor: COLOR.GREY_LIGHT,
        borderBottomWidth: 1
    },
    containerCategories: {
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 1,
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20
    },
    childItemCategory: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
        justifyContent: 'space-between'
    },
    nameCategory: {
        color: COLOR.DARK,
        fontWeight: '700',
        fontSize: 16
    },
    countProduct: {
        color: COLOR.SOFT,
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'right'
    },
    btnApply: {
        marginTop: 10,
        backgroundColor: COLOR.GREEN,
        borderRadius: 20,
        fontWeight: '700',
        fontSize: 20,
        paddingVertical: 10,
        marginBottom: 30,
        height: 50
    }
})