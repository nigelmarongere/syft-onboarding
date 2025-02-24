import {View, StyleSheet} from "react-native";

import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import TitleAndPrompt from "@/components/TitleAndPrompt";
import BottomModal from "@/components/BottomModal";

import OnboardingScreens from "./OnboardingScreens";
import { useState } from "react";

export default function Index() {
  const [screen, setScreen] = useState<number>(0);
  const [title, setTitle] = useState<string>('Hey!');
  const [prompt, setPrompt] = useState<string>('What should we call you? *');

  return (
    <View style={styles.container}>
      <Logo name="SYFT"/>
      <ProgressBar number={1}/>
      <TitleAndPrompt title={title} prompt={prompt}/>
      <BottomModal screen={screen} setTitle={setTitle} setPrompt={setPrompt} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3D5BFF',
  }
});
