import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ImageBackground, InteractionManager, Text, Linking, Platform, SafeAreaView, BackHandler, StatusBar, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { ScaledSheet } from "react-native-size-matters";
import { Constants } from 'react-native-unimodules';
console.log("Constants.systemFonts",Constants.systemFonts);

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

import * as Permissions from "expo-permissions";

import { useTensorFlowLoaded } from "./useTensorFlow";
import { LoadingView } from "./LoadingView";
import { ModelView } from "./ModelView";


export default function CameraScreen() {
    const isLoaded = useTensorFlowLoaded();
    // const [status] = Permissions.usePermissions(Permissions.CAMERA, {
    //   ask: true,
    // });
    // if (!(status || {}).granted) {
    //   return <LoadingView>Camera permission is required to continue</LoadingView>;
    // }
    if (!isLoaded) {
      return <LoadingView>Loading TensorFlow</LoadingView>;
    }
  
    return <LoadingView>Loading TensorFlow</LoadingView>;
  }
 