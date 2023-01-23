import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { generateDatesFromStartYear } from '../utils/generate-dates-from-init-year';

import { View, Text, ScrollView } from 'react-native';
import { Header, HabitDay, day_size } from '../components';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const datesFromYearStart = generateDatesFromStartYear();
const minimumSumaryDateSizes = 18 * 5;
const amountOfDaysTofill = minimumSumaryDateSizes - datesFromYearStart.length;

export const Home = () => {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay} - ${i}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: day_size }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.getTime()} onPress={() => navigate('Habit', { date: date.toISOString() })} />
          ))}
          {amountOfDaysTofill > 0 &&
            Array.from({ length: amountOfDaysTofill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: day_size, height: day_size }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};
