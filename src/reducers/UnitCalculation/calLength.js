const unitLength = (source) => {
  return {
    Metre: source,
    Foot: source * 3.28 || '',
    Inch: source * 39.37 || '',
    Yard: source * 1.09 || '',
  }
};
const calLength = (unit, value) => {
  switch (unit) {

    case 'Metre':
      return {
        ...unitLength(value),
        Metre: value
      }

    case 'Foot':
      return {
        ...unitLength(value / 3.28),
        Foot: value
      }

    case 'Inch':
      return {
        ...unitLength(value / 39.37),
        Inch: value
      }

    case 'Yard':
      return {
        ...unitLength(value / 1.09),
        Yard: value
      }
  }
};


export default calLength;
