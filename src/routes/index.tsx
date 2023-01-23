import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export const Routes = () => (
  <View className="flex-1 bg-background">
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </View>
);