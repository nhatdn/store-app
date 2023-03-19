import React from "react";
import { Primary } from "../../layouts";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Input, Product } from "../../components";
import { Glass } from "../../icons";
import { COLOR } from "../../constants";

const imageURL = "https://image-us.24h.com.vn/upload/4-2021/images/2021-11-04/Cap-nhat-Bang-gia-Tivi-LG-moi-nhat-thang-11-Giam-toi-9-trieu-dong-tivi-lg-1636012268-596-width660height440.jpg";

export function DetailCategory({navigation}) {
    const handleGoFilter = () => {
        navigation.navigate("Filter");
    }
    return (
        <Primary title="Xe máy">
            <View style={styles.container}>
                <View>
                    <Input icon={<Glass/>}/>
                </View>
                <View style={styles.containerResult}>
                    <Text style={styles.titleResult}>Kết quả:</Text>
                    <Text style={styles.totalResult}>12000 Sản phẩm</Text>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                <Product end amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
            </ScrollView>
        </Primary>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 25,
        paddingRight: 25
    },
    containerResult: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center'
        
    },
    titleResult: {
        fontSize: 16,
        fontWeight: '500',
        maxWidth: 100,
        paddingRight: 10,
    },
    totalResult: {
        fontSize:  15,
        fontWeight: '300',
        color: COLOR.GREEN_DARK,
        maxWidth: 150,
    }
})