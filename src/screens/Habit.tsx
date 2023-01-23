import { View, ScrollView, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/navigation';
import dayjs from 'dayjs';

import { BackButton, CheckBox, ProgressBar } from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Habit'>;

export const Habit = ({ route }: Props) => {
  const { date } = route.params;
  const parseDate = dayjs(date).locale('pt-br');
  const dayOfWeek = parseDate.format('dddd');
  const dayAndMounth = parseDate.format('DD/MM');

  return (
    <View className="flex-1 bg-background px-6 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">{dayOfWeek}</Text>

        <Text className="text-3xl font-extrabold text-white">{dayAndMounth}</Text>

        <ProgressBar progress={80} />

        <View className="mt-6">
          <CheckBox title="Beber 2L de água" />
          <CheckBox title="Caminhar" checked/>
          <CheckBox title="Codar 30 min" />
        </View>
      </ScrollView>
    </View>
  );
};
