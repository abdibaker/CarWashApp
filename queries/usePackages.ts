import { useQuery } from '@tanstack/react-query';

import { api } from '@/api.config';

interface Package {
  packageId: string;
  packageName: string;
  description: string;
  price: number;
  carWashId: CarWashId;
  services: Service[];
  car_id: CarId;
}

interface CarId {
  carId: string;
  carName: string;
  carType: string;
}

interface Service {
  serviceId: string;
  serviceName: string;
  description: string;
}

interface CarWashId {
  carWashId: string;
  name: string;
  location: string;
  contactNumber: string;
  email: string;
  website: string;
  workingHours: string;
  latitude: string;
  longitude: string;
  user_data: null;
}

export const usePackages = (id: string) => {
  const query = useQuery({
    queryKey: ['packages', id],
    enabled: !!id,
    queryFn: fetchPackages,
  });

  return query;
};

const fetchPackages = async ({ queryKey }: any) => {
  const [, id] = queryKey;
  try {
    const { data } = await api.get<Package[]>(`/packages/by-car-was-id/${id}`);
    return data;
  } catch (error) {
    console.log('🚀 ~ fetchPackages ~ error:', error);
    throw new Error(error as any);
  }
};
