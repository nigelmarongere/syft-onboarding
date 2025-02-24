import {View, StyleSheet} from "react-native";

import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import TitleAndPrompt from "@/components/TitleAndPrompt";
import ModalZero from "@/components/ZeroModal";
import BottomModal from "@/components/BottomModal";

import { useState } from "react";

export default function Index() {
  const [isScreenZero, setIsScreenZero] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('Hey!');
  const [prompt, setPrompt] = useState<string>('Are you ready to start?');

  return (
    isScreenZero ? (
      <View style={styles.container}>
        <Logo name="SYFT"/>
        <View style={styles.containerZero}>
          <ProgressBar number={1}/>
          <TitleAndPrompt title={title} prompt={prompt}/>
        </View>
        <ModalZero setTitle={setTitle} setPrompt={setPrompt} setIsScreenZero={setIsScreenZero}/>
      </View>
      ) : (
      <View style={styles.container}>
        <Logo name="SYFT"/>
        <ProgressBar number={1}/>
        <TitleAndPrompt title={title} prompt={prompt}/>
        <BottomModal setTitle={setTitle} setPrompt={setPrompt} />
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3D5BFF',
  },
  containerZero: {
    paddingTop: '40%'
  }
});
