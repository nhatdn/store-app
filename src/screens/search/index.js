import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Center } from "../../layouts"
import { Close, Glass, Filter, BackSearch, SecondaryCard } from "../../icons";
import { COLOR } from "../../constants";
import { Input, Product } from "../../components";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

const histories = [
    "Điều hòa",
    "Tivi",
    "Tủ lạnh",
    "Máy giặt"
]
const imageURL = "https://image-us.24h.com.vn/upload/4-2021/images/2021-11-04/Cap-nhat-Bang-gia-Tivi-LG-moi-nhat-thang-11-Giam-toi-9-trieu-dong-tivi-lg-1636012268-596-width660height440.jpg"
export function Search({route, navigation}) {

    const handleSearch = () => {
        navigation.goBack();
    }
    const handleGoFilter = () => {
        navigation.navigate("Filter");
    }
    const { searchData } = route.params;
    return (
        <View>
            <Center>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleSearch} style={styles.containerClose}>
                        <Close/>
                    </TouchableOpacity>
                    <Input value={searchData} styleInput={styles.addPadingInput} icon={<Glass/>} backIcon={<TouchableOpacity onPress={handleGoFilter}>
                        <Filter/>
                    </TouchableOpacity>} style={styles.inputSearch}/>
                </View>
            </Center>
            <ScrollView style={{height: '100%'}}>
                <SafeAreaView>
                    <Center>
                        <View style={styles.historyHeader}>
                            <Text style={styles.titleRecentSearch}>Recent Search</Text>
                            <Text style={styles.deleteHistory}>Xóa lịch sử</Text>
                        </View>
                        <View>
                            {histories.map((history, index) => (
                                <View key={index} style={styles.containerHistory}>
                                    <TouchableOpacity style={styles.wrapperHistory} >
                                        <BackSearch />
                                        <Text style={styles.nameHistory}>{history}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.deleteItemHistory}>
                                        <Close fill="#fff" width={18} height={18}/>
                                    </TouchableOpacity>
                                </View> )
                            )}
                        </View>
                    </Center>
                    <View style={styles.line}></View>
                    <Center>
                        <View style={styles.headerResult}>
                            <Text style={styles.titleResult}>Kết quả tìm kiếm</Text>
                            <Text style={styles.filterResult}>Mới nhất</Text>
                        </View>
                        <View style={styles.containerResult}>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                            <Product end amount={200} discount="10" realPrice={"5.0"} fakePrice={"6.0"} name={"Tivi LG 50 Inch"} linkImage={imageURL}/>
                        </View>
                    </Center>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 25,
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    line: {
        minHeight: 6,
        backgroundColor: COLOR.GREY_LIGHT
    },
    inputSearch: {
        marginLeft: 15,
        flex: 1,
        width: 'auto'
    },
    addPadingInput: {
        paddingRight: 40
    },
    historyHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
    },
    titleRecentSearch: {
        color: COLOR.DARK,
        fontSize: 18,
        fontWeight: '700'
    },
    deleteHistory: {
        color: COLOR.ACCENT,
        fontWeight: '500',
        fontSize: 14,
    },
    containerHistory: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        padding: 8,
    },
    wrapperHistory: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameHistory: {
        color: COLOR.DARK,
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 10
    },
    deleteItemHistory: {
        width: 30,
        height: 30,
        borderRadius: 500,
        backgroundColor: COLOR.GREY_DARK,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerResult: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    titleResult: {
        fontWeight: '700',
        fontSize: 18,
        color: COLOR.DARK
    },
    filterResult: {
        fontWeight: '500',
        fontSize: 14,
        color: COLOR.GREEN
    },
    containerResult: {
        paddingBottom: 120
    },
})