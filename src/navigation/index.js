import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
    Login, 
    ChangePassword, 
    Register, 
    ConfirmAccount, 
    ForgotPassword, 
    UpdateAccount, 
    PostProduct, 
    Categories, 
    Payment,
    Search,
    Filter,
    DetailCategory,
    ProductDetail,
    Cart,
    MyCart,
    Home
} from '../screens';
const Stack = createNativeStackNavigator();

export function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, contentStyle: { backgroundColor:'#FFFFFF'} }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
                    <Stack.Screen name="PostProduct" component={PostProduct} />
                    <Stack.Screen name="Categories" component={Categories} />
                    <Stack.Screen name="Payment" component={Payment} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="Filter" component={Filter} />
                    <Stack.Screen name="DetailCategory" component={DetailCategory} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="ProductDetail" component={ProductDetail} />
                    <Stack.Screen name="MyCart" component={MyCart} />
                    <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}