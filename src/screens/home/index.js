import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { COLOR } from "../../constants";
import { Bell, Glass, SingleArrowRight, Tivi, Laptop, PC, Toy, Wash, Bicycle, Fridge, Phone, Heart, Star, DoubleArrow, Cart, Home as HomeIcon } from "../../icons";
import { Input } from "../../components";
import { ScrollView } from "react-native";
import { useState } from "react";

const width = Dimensions.get("window").width;

const menu = [
    {
        icon: <Tivi/>,
        name: "Tivi",
        count: "45 loại",
        color: '#28B0CE'
    },
    {
        icon: <Fridge/>,
        name: "Tủ lạnh",
        count: "45 loại",
        color: "#2E65CF"

    }, 
    {
        icon:  <Wash/>,
        name: "Máy giặt",
        count: "45 loại",
        color: "#1CBD5C"

    }, 
    {
        icon: <Phone/>,
        name: "Điện thoại",
        count: "45 loại",
        color: "#E85276",
    }, 
    {
        icon: <Laptop/>,
        name: "Laptop",
        count: "45 loại",
        color: "#EF962E"

    }, 
    {
        icon: <Toy/>,
        name: "Đồ chơi",
        count: "45 loại",
        color: "#14AB87"

    }, 
    {
        icon: <PC/>,
        name: "Máy tính",
        count: "45 loại",
        color: "#AE7156"

    }, 
    {
        icon: <Bicycle/>,
        name: "Xe đạp",
        count: "45 loại",
        color: "#A131AD"

    }, 
]
export function Home({navigation}) {
    const [searchData, setSearchData] = useState("");
    const handleProductDetail = () => {
        navigation.navigate("ProductDetail");
    }

    const handleSearch = () => {
        console.log("sss: ", searchData);
        navigation.navigate("Search", {
            searchData            
          });
    }
    const handleGoCategoryDetail = () => {
        navigation.navigate("DetailCategory");

    }
    const handleGoMyCart = () => {
        navigation.navigate("MyCart");
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
        <View style={styles.containerHome}>
                <View style={styles.containerHeader}>
                    <View>
                        <Text style={styles.textGreetings}>Chào buổi sáng</Text>
                        <Text style={styles.textNameUser}> Mếc AP.👋</Text>
                    </View>
                    <View style={styles.containerNotify}>
                        <Text style={styles.amountNotify}>6</Text>
                        <View style={styles.containerIconNotify}>
                            <Bell/>
                        </View>
                    </View>
                </View>
                <View style={styles.containerSearch}>
                    <Input onChangeText={setSearchData} onSubmitEditing={handleSearch} icon={<Glass/>} placeholder="Tìm kiếm..."/>
                </View>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.listProduct}>
                    <View style={styles.containerHeaderCategory}>
                        <Text style={styles.categoryTitle}>Trang sản phẩm</Text>
                        <SingleArrowRight/>
                    </View>
                    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                        {
                            menu.map(({icon, count, name, color}, index) => (
                                <TouchableOpacity onPress={handleGoCategoryDetail} key={index} style={{...styles.containerSoftCategory, backgroundColor: color}}>
                                    {icon}
                                    <Text style={styles.categoryName}>{name}</Text>
                                    <Text style={styles.amountProduct}>{count}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    <View>
                        <Text style={styles.textEndow}>Ưu đãi khủng</Text>
                        <View style={styles.containerProductList}>
                            <TouchableOpacity onPress={handleProductDetail} style={styles.wrapperProduct}>
                                <TouchableOpacity style={styles.containerHeart}>
                                    <Heart/>
                                </TouchableOpacity>
                                <Image style={styles.imageProduct} source={require("../../assets/image.jpg")}/>
                                <View style={styles.wrapperDescriptionProduct}>
                                    <Text style={styles.nameProduct}>Tủ lạnh</Text>
                                    <View style={styles.priceProduct}>
                                        <Text style={styles.textPrice}>2.000.000đ</Text>
                                        <Text style={styles.textStars}>(243) <Star full width={20} height={20}/></Text>
                                    </View>
                                    <TouchableOpacity style={styles.btnAddToCart}>
                                        <Text style={styles.textAddToCart}>Thêm vào giỏ hàng</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleProductDetail} style={styles.wrapperProduct}>
                                <TouchableOpacity style={styles.containerHeart}>
                                    <Heart/>
                                </TouchableOpacity>
                                <Image style={styles.imageProduct} source={require("../../assets/image.jpg")}/>
                                <View style={styles.wrapperDescriptionProduct}>
                                    <Text style={styles.nameProduct}>Tủ lạnh</Text>
                                    <View style={styles.priceProduct}>
                                        <Text style={styles.textPrice}>2.000.000đ</Text>
                                        <Text style={styles.textStars}>(243) <Star full width={20} height={20}/></Text>
                                    </View>
                                    <TouchableOpacity style={styles.btnAddToCart}>
                                        <Text style={styles.textAddToCart}>Thêm vào giỏ hàng</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', zIndex: 222222, bottom: 0, left: 10, flex: 1, minWidth: width, width, backgroundColor: 'white', paddingVertical: 5, borderTopWidth: 1, borderTopColor: COLOR.GREY_LIGHT}}>
                <View style={styles.containerMenu}>
                    <TouchableOpacity>
                        <HomeIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoListCategories}>
                        <DoubleArrow/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoMyCart}>
                        <Cart/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={handleGoPostProduct}>
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
    containerHome: {
        padding: 20,
        marginTop: 10,
        flex: 1,
        position: 'relative'
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textGreetings: {
        color: COLOR.DARK,
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 10
    },
    textNameUser: {
        fontSize: 24,
        fontWeight:'700'
    },
    containerNotify: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLOR.GREY_LIGHT,
        width: 90,
        borderRadius: 28
    },
    containerIconNotify: {
        width: 45,
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.ORANGE,
        borderRadius: 50,
        borderColor: COLOR.WHITE,
        borderWidth: 5
    },
    amountNotify: {
        flex: 1,
        color: COLOR.DARK,
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center'
    },
    containerSearch: {
        marginTop: 10
    },
    containerHeaderCategory: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 10
    },
    containerSoftCategory: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 15,
        marginHorizontal: 5
    },
    categoryTitle: {
        color: COLOR.DARK,
        fontWeight: '700',
        fontSize: 18
    },
    categoryName: {
        color: COLOR.WHITE,
        fontSize: 14,
        fontWeight: '700',
        marginTop: 10
    },
    amountProduct: {
        color: COLOR.WHITE,
        fontSize: 12,
         fontWeight: '400'
    },
    textEndow: {
        color: COLOR.DARK,
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 10,
        marginTop: 10
    },
    nameProduct: {
        color: COLOR.DARK,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 10
    },
    imageProduct: {
        width: '100%',
        height: 140,
        borderRadius: 10
    },
    containerProductList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    wrapperProduct: {
        minWidth: '45%',
        maxWidth: '100%',
        width: '48.2%',
        position: 'relative',
        borderWidth: 1,
        borderColor: COLOR.GREY_LIGHT,
        borderRadius: 10,
        marginHorizontal: 3,
        marginBottom: 10
    },
    containerHeart: {
        position: 'absolute',
        top: 5,
        left: 5,
        zIndex: 10,
        padding: 5,
    },
    btnAddToCart: {
        backgroundColor: COLOR.GREEN_LIGHT,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        margin: 5
    },
    textAddToCart: {
        color: COLOR.GREEN,
        fontSize: 12,
        fontWeight: '800',
    },
    priceProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    textStars: {
        color: COLOR.GREY_DARK,
    },
    textPrice: {
        paddingVertical: 5,
        color: COLOR.ACCENT,
    },
    containerMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    listProduct: {
        paddingBottom: 50,
    }
});