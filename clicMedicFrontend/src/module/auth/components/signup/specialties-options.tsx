import React from 'react';
import { useSpecialtiesData } from '../../../doctor/hooks/specialties.hook';

export const SpecialtiesOptions = () => {
  const { specialties, specialtiesLoading } = useSpecialtiesData();
  if (specialtiesLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {Array.isArray(specialties) &&
        specialties.length > 0 &&
        specialties.map(({ id, nom }) => {
          return <option value={id}>{nom}</option>;
        })}
    </>
  );
};
