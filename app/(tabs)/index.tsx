import useTheme from '@/hooks/useTheme';
import { Link } from '@react-navigation/native';
import { useMutation, useQuery } from 'convex/react';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import {api} from "@/convex/_generated/api";


export default function Index() {
  const {toggleDarkMode} = useTheme();

  
  

  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}><Text>Toggle the mode</Text></TouchableOpacity>
     </View>
  );
}


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",

  },
  content:{
    fontSize: 52,
  }
 })
