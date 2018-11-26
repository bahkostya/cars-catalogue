const API_PREFIX = process.env.API_PREFIX || 'http://localhost:3001';

export async function fetchAllCars(
  page = 1,
  manufacturer = 'Fiat',
  color = '',
  sort = ''
) {
  const fetchOptions = {
    method: 'GET',
  };

  const response = await fetch(
    `${API_PREFIX}/cars?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`,
    fetchOptions
  );

  return response.json();
}

export async function fetchColorsFilters() {
  const fetchOptions = {
    method: 'GET',
  };

  const response = await fetch(`${API_PREFIX}/colors`, fetchOptions);

  return response.json();
}

export async function fetchManufacturersFilters() {
  const fetchOptions = {
    method: 'GET',
  };

  const response = await fetch(`${API_PREFIX}/manufacturers`, fetchOptions);

  return response.json();
}
