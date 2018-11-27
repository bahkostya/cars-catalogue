const API_PREFIX = process.env.API_PREFIX || 'http://localhost:3001';

export async function fetchAllCars({
  currentPage = 1,
  currentManufacturer = '',
  currentColor = '',
  sortBy = '',
}) {
  const fetchOptions = {
    method: 'GET',
  };

  const response = await fetch(
    `${API_PREFIX}/cars?manufacturer=${currentManufacturer}&color=${currentColor}&sort=${sortBy}&page=${currentPage}`,
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

export async function fetchCarByStockNumber(stockNumber) {
  const fetchOptions = {
    method: 'GET',
  };

  const response = await fetch(
    `${API_PREFIX}/cars/${stockNumber}`,
    fetchOptions
  );

  return response.json();
}
