const unitTime = source => {
  return {
    Second: source * 31536000 || "",
    Minute: source * 525600 || "",
    Hour: source * 8760 || "",
    Year: source || ""
  };
};

const calTime = (unit, value) => {
  switch (unit) {
    case "Second":
      return {
        ...unitTime(value / 31536000),
        Second: value
      };

    case "Minute":
      return {
        ...unitTime(value / 525600),
        Minute: value
      };

    case "Hour":
      return {
        ...unitTime(value / 8760),
        Hour: value
      };

    case "Year":
      return {
        ...unitTime(value),
        Year: value
      };
  }
};

const fistState = {
  Second: "",
  Minute: "",
  Hour: "",
  Year: ""
};

const time = (state = fistState, action) => {
  if (action.type === "CHANGE_TIME") {
    return calTime(action.unit, action.value);
  }
  return state;
};

export default time;
