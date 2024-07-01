import { useEffect, useState } from 'react';
import { SpecialtiesType } from '../../auth/types';
import { doctorsServices } from '../services/services';

export const useSpecialtiesData = () => {
  const [specialtiesLoading, setSpecialtiesLoading] = useState<boolean>(false);
  const [specialties, setSpecialties] = useState<SpecialtiesType[]>([]);
  useEffect(() => {
    const getSpecialties = async () => {
      setSpecialtiesLoading(true);
      const result: {
        specialites: SpecialtiesType[];
      } = await doctorsServices.getSpecialties();
      setSpecialties(result.specialites);
      setSpecialtiesLoading(false);
    };
    getSpecialties();
  }, []);

  return {
    specialtiesLoading,
    specialties,
  };
};
