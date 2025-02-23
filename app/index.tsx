import {View, StyleSheet} from "react-native";

import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import TitleAndPrompt from "@/components/TitleAndPrompt";
import BottomModal from "@/components/BottomModal";

import OnboardingScreens from "./OnboardingScreens";

export default function Index() {
  return (
    <View style={styles.container}>
      <Logo name="SYFT"/>
      <ProgressBar number={1}/>
      <TitleAndPrompt title="Hey!" prompt="What should we call you? *"/>
      <BottomModal screen={0} />
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
