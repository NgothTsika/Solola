import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import WelcomImage from "../assets/images/welcome.png"; // Ensure the file exists in the specified path
import { Link } from "expo-router";

const Page = () => {
  const openLink = () => {};

  return (
    <View className=" flex-1 p-5 justify-center items-center bg-white">
      <Image
        source={WelcomImage}
        className=" h-80 w-full mb-10"
        resizeMode="contain"
      />
      <Text className=" font-Okra-ExtraBold text-3xl tracking-widest">
        Welcome to Solola
      </Text>
      <View className="px-16 ">
        {/* <Text className=" font-Okra-Regular text-gray mt-5  text-xs text-center">
          Solola is a digital platform that connects you with your family and
          friends to share and enjoy moments together.
        </Text> */}
        <Text className=" font-Okra-Regular text-xs text-gray mt-5 text-center">
          Read our{" "}
          <Text className="text-primary" onPress={openLink}>
            Privacy Policy{" "}
          </Text>
          .{'Tap "Agree & Continue" to accept the '}
          <Text className="text-primary" onPress={openLink}>
            Terms of Service
          </Text>
          .
        </Text>
      </View>
      <Link href={"/otp"} className="  p-3 mt-10 rounded-lg" asChild replace>
        <TouchableOpacity>
          <Text className=" text-blue-500 text-2xl text-center font-Okra-Bold">
            Agree & Continue
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;
