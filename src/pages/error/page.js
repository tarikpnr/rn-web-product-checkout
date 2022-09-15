import { Link } from "@react-navigation/web";
import React from "react";
import { StyleSheet, Text, View } from "react-native-web";

const Error = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>
        An error happened with the order... Please contact us...
      </Text>

      <Link routeName="Page1">Go to product list</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: "auto",
    fontWeight: 700,
    marginVertical: 12,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Error;
