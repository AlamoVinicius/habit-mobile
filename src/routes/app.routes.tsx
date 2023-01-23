import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/navigation';

import { Home, Habit, NewHabit } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();
export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="Habit" component={Habit} />
    <Screen name="NewHabit" component={NewHabit} />
  </Navigator>
);
