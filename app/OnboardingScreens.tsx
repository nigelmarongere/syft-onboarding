type OnboardingScreen = {
    number: number,
    title: string,
    prompt: string,
  }
  
  const OnboardingScreens: OnboardingScreen[] = [
    {
        number: 0,
        title: "Hey!",
        prompt: "Are you ready to start?",
    },
    {
        number: 1,
        title: "Hey!",
        prompt: "What should we call you? *",
    },
    {
        number: 2,
        title: "Hey!",
        prompt: "How should we set this up? *",
    },
  ];

  export default OnboardingScreens;