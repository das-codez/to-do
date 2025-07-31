import useTheme, { ColorScheme } from '@/hooks/useTheme';
import { Link } from '@react-navigation/native';
import { useMutation, useQuery } from 'convex/react';
import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import {api} from "@/convex/_generated/api";
import { createHomeStyles } from '@/assets/styles/home.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from "expo-linear-gradient";
import Header from '@/components/Header';
import TodoInput from '@/components/TodoInput';


export default function Index() {
  const {toggleDarkMode, colors} = useTheme();

  const homeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);
  

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView style={homeStyles.safeArea}>
      <Header/>
      <TodoInput/>
      <TouchableOpacity onPress={toggleDarkMode}><Text>Toggle the mode</Text></TouchableOpacity>
     </SafeAreaView>
    </LinearGradient>
  );
}


