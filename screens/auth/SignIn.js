import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignInStyle from '../../constants/styles/Screens/SignIn_Style';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../constants/Utils/MyRoutes';

const SignIn = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={[
                SignInStyle.container,
                {
                    backgroundColor: colors.background
                }
            ]}
        >
            <View style={SignInStyle.headerContainer}>
                <Image
                    source={require("../../assets/BlockWork_logo_Icon.png")}
                    style={SignInStyle.headerImage}
                />
                <Text style={[SignInStyle.headerText, { color: colors.appName }]}>BlockWork</Text>
            </View>

            <View style={SignInStyle.signContainer}>
                <View style={SignInStyle.imageContainer}>
                    <Image
                        source={require("../../assets/signInImage.png")}
                        style={SignInStyle.image}

                    />
                </View>

                <View style={SignInStyle.textContainer}>

                    <Text style={[SignInStyle.textHead, { color: colors.text }]}>
                        Find a great work
                    </Text>
                    <Text style={[SignInStyle.text, { color: colors.text }]}>
                        Meet clients you’re excited to work with and grow
                        your independent career or business
                    </Text>

                </View>

                <TouchableOpacity
                    style={SignInStyle.button}
                    onPress={() => {
                        navigation.navigate(Routes.signUp);
                    }}
                >
                    <Image
                        source={require("../../assets/walletIcon.png")} // Add your button image here
                        style={SignInStyle.buttonImage}
                    />
                    <Text style={SignInStyle.buttonText}>
                        Connect Wallet</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});


export default SignIn;
