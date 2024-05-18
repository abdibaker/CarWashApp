import { useQuery } from '@tanstack/react-query';

import { api } from '@/api.config';

interface CarWashes {
  carWashId: string;
  name: string;
  location: string;
  contactNumber: string;
  email: string;
  website: string;
  workingHours: string;
  latitude: string;
  longitude: string;
  user_data: UserData;
}

interface UserData {
  user_id: string;
  username: string;
  user_status: string;
}

export const useCarWash = () => {
  const query = useQuery({
    queryKey: ['carwashes'],
    queryFn: fetchCarWash,
  });

  return query;
};

const fetchCarWash = async () => {
  const { data } = await api.get<CarWashes[]>('/carwashes');
  return data.map((item) => {
    const rate = generateRate();
    return {
      ...item,
      rate,
    };
  });
};

function generateRate(): number {
  const rates = [1, 2, 3, 3, 4, 4, 5, 5];
  const randomIndex = Math.floor(Math.random() * rates.length);
  return rates[randomIndex];
}
