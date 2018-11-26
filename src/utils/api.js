const API_PREFIX = process.env.API_PREFIX || 'http://localhost:3001';

export async function fetchAllCars(
  page = 1,
  manufacturer = 'Fiat',
  color = '',
  sort = ''
) {
  const fetchOptions = {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // mode: 'cors',
  };

  const response = await fetch(
    `${API_PREFIX}/cars?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`,
    fetchOptions
  );

  return response.json();
}
