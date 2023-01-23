import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import React from 'react';
import colors from 'tailwindcss/colors';

interface props extends TouchableOpacityProps {
  checked?: boolean;
  title: string;
}

export const CheckBox = ({ checked = false, title, ...rest }: props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mt-1 mb-1 items-center" {...rest}>
      {checked ? (
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={colors.white} />
        </View>
      ) : (
        <View className="w-8 h-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
