export const getSavedItems = () => {
  const savedCarsJsonString = localStorage.getItem('savedCars');

  return savedCarsJsonString ? JSON.parse(savedCarsJsonString) : [];
};
