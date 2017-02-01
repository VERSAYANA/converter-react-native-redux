const unitMass = source => {
  return {
    Gram: source || "",
    Kilogram: source * 0.001 || "",
    Pound: source * 0.00220462 || "",
    Ounce: source * 0.035274 || ""
  };
};
const calMass = (unit, value) => {
  switch (unit) {
    case "Gram":
      return {
        ...unitMass(value),
        Gram: value
      };

    case "Kilogram":
      return {
        ...unitMass(value / 0.001),
        Kilogram: value
      };

    case "Pound":
      return {
        ...unitMass(value / 0.00220462),
        Pound: value
      };

    case "Ounce":
      return {
        ...unitMass(value / 0.035274),
        Ounce: value
      };
  }
};

const fistState = {
  Gram: "",
  Kilogram: "",
  Pound: "",
  Ounce: ""
};

const mass = (state = fistState, action) => {
  if (action.type === "CHANGE_MASS") {
    return calMass(action.unit, action.value);
  }
  return state;
};

export default mass;
