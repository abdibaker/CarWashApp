import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function StarRating({
  className,
  maxRating = 5,
  color = '#fcc419',
  size = 14,
  message,
  rate = 0,
  onSetRating = () => {},
}: {
  className?: string;
  maxRating?: number;
  color?: string;
  size?: number;
  message?: string[];
  rate?: number;
  onSetRating?: (rating: number) => void;
}) {
  const [rating, setRating] = useState(rate);

  function handleRate(rating: number) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <View className={`flex flex-row items-center gap-4 ${className}`}>
      <View className="flex flex-row gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRate(i + 1)}
            full={rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </View>
      <Text className="leading-4" style={{ fontSize: size, color }}>
        {message?.length === maxRating ? message[rating - 1] : rating || ''}
      </Text>
    </View>
  );
}

function Star({
  onRate,
  full = false,
  color,
  size,
}: {
  onRate: () => void;
  full?: boolean;
  color: string;
  size: number;
}) {
  return (
    <TouchableOpacity onPress={onRate}>
      {full ? (
        <AntDesign name="star" size={size} color={color} />
      ) : (
        <AntDesign name="staro" size={size} color={color} />
      )}
    </TouchableOpacity>
  );
}
