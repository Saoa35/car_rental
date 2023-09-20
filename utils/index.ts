export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "f09583baa7msh25b04d5a1b69517p1801c5jsn81318439a7c0",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
};
