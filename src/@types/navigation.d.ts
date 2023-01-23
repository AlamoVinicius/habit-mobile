export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewHabit: undefined;
      Habit: {
        date: string;
      };
    }
  }
}

export type RootStackParamList = {
  Home: undefined;
  NewHabit: undefined;
  Habit: { date: string };
};
