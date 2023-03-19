import React from "react";
import { Primary } from "../../layouts"
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Laptop, Tivi, PC, Toy, Wash, Bicycle, Fridge, Phone } from "../../icons";
import { COLOR } from "../../constants";

function getRandomColor() {
    const availableCharacters = '0123456789ABCDEF';
    const availableCharacterLength = availableCharacters.length;
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += availableCharacters[Math.floor(Math.random() * availableCharacterLength)];
    }
    return color;
}

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

export function Categories({ navigation }) {
    const handleShowDetailCategory = () => {
        navigation.navigate("Payment")
    }
    return (
        <Primary title={"Tất cả các trang"}>
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.containerImage}>
                        {menu.map(({icon, name, count, color}, index) => (
                            <TouchableOpacity onPress={handleShowDetailCategory} key={index} style={{...styles.btnGetImage, backgroundColor: color}}>
                                {icon}
                                <Text style={styles.titleCategory}>{name}</Text>
                                <Text style={styles.totalAssets}>{count}</Text>
                            </TouchableOpacity>
                        )) }
                        
                    </View>
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
    containerImage: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    btnGetImage: {
        flex: 1,
        minWidth: '48%',
        width: '48%',
        maxWidth: '48%',
        maxHeight: 180,
        marginBottom: 10,
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: getRandomColor(),
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    titleCategory: {
        marginTop: 25,
        paddingBottom: 15,
        fontSize: 20,
        fontWeight: 700,
        color: COLOR.WHITE,
    },
    totalAssets: {
        color: COLOR.WHITE,
        fontWeight: '200'
    }
})