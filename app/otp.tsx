import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getCountryCallingCode, CountryCode } from "libphonenumber-js";

const otp = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [countryCode, setCountryCode] = useState("GH");
  const router = useRouter();
  const KeyboarderVerticalOffest = Platform.OS === "ios" ? 90 : 0;
  const { bottom } = useSafeAreaInsets();

  const formatPhoneNumber = (number: string) => {
    return number.replace(/(\d{3})(?=\d)/g, "$1 ");
  };

  const sentOTP = async () => {
    setLoading(true);
    const numericCountryCode = getCountryCallingCode(
      countryCode as CountryCode
    );
    const fullPhoneNumber = `+${numericCountryCode} ${phoneNumber.replace(
      /\s/g,
      ""
    )}`;
    setTimeout(() => {
      setLoading(false);
      router.push(`/verify/${fullPhoneNumber}`);
    }, 2000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={KeyboarderVerticalOffest}
      >
        <View className="flex-1 items-center p-5 bg-background gap-5">
          {loading && (
            <View className="z-10 bg-background/50 justify-center items-center absolute w-full h-full">
              <ActivityIndicator size="large" className="text-blue-700" />
              <Text className="text-base p-3">Sending code...</Text>
            </View>
          )}

          <Text className="font-Okra-Regular text-gray text-sm">
            Solola will need to verify your phone number. Enter your phone
            number to continue.
          </Text>

          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="GH"
            layout="first"
            withDarkTheme
            withShadow
            textContainerStyle={{
              borderBottomEndRadius: 10,
              borderTopRightRadius: 10,
              height: 55,
            }}
            containerStyle={{
              width: "100%",
              borderRadius: 10,
            }}
            value={phoneNumber}
            onChangeText={(phoneNumber) => {
              const formattedNumber = formatPhoneNumber(
                phoneNumber.replace(/\s/g, "")
              );
              SetPhoneNumber(formattedNumber);
            }}
            onChangeFormattedText={(phoneNumber) => {
              setFormattedValue(phoneNumber);
            }}
            onChangeCountry={(country) => {
              setCountryCode(country.cca2);
            }}
          />

          <Text className="font-Okra-Regular text-sm text-gray mt-5 text-center">
            You must be{" "}
            <Text className="text-primary text-center">
              at least 16 years old
            </Text>{" "}
            to register. learn how Solola works with the{" "}
            <Text className="text-primary text-center">Privacy Policy</Text> and{" "}
            <Text className="text-primary text-center">Terms of Service</Text>.
          </Text>

          <View className="flex-1" />

          <TouchableOpacity
            onPress={sentOTP}
            className={`w-full items-center text-sm bg-lightGray p-3 rounded-lg mb-10 ${
              phoneNumber !== "" ? "bg-primary" : null
            }`}
          >
            <Text
              className={`text-gray-500 text-xl font-Okra-Medium text-black ${
                phoneNumber !== "" ? "text-white" : null
              }`}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default otp;
