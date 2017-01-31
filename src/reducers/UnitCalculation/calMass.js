const unitMass = (source) => {
  return {
    Gram: source || '',
    Kilogram: source * 0.001 || '',
    Pound: source * 0.001 || '',
    Ounce: source * 0.035274 || '',
  }
};
const calMass = (unit, value) => {
  switch (unit) {

    case 'Gram':
      return {
        ...unitMass(value),
        Gram: value
      }

    case 'Kilogram':
      return {
        ...unitMass(value / 0.001),
        Kilogram: value
      }

    case 'Pound':
      return {
        ...unitMass(value / 0.001),
        Pound: value
      }

    case 'Ounce':
      return {
        ...unitMass(value / 0.035274),
        Ounce: value
      }
  }
};


export default calMass;
