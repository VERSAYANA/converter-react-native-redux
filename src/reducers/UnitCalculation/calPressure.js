const unitPressure = (source) => {
  return {
    Atmosphere: source || '',
    Pascal: source * 101325 || '',
    Barr: source * 1.01325 || '',
    Torr: source * 760 || '',
  }
};

const calPressure = (unit, value) => {
  switch (unit) {

    case 'Atmosphere':
      return {
        ...unitPressure(value),
        Atmosphere: value
      }

    case 'Pascal':
      return {
        ...unitPressure(value / 101325),
        Pascal: value
      }

    case 'Barr':
      return {
        ...unitPressure(value / 1.01325),
        Barr: value
      }

    case 'Torr':
      return {
        ...unitPressure(value / 760),
        Torr: value
      }
  }
};


export default calPressure;
