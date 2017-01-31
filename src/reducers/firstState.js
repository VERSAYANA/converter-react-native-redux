const firstState = () => {
  return [
    {
      name: 'Length',
      active: true,
      units: {
        Metre: '',
        Foot: '',
        Inch: '',
        Yard: '',
      }
    },

    {
      name: 'Mass',
      active: false,
      units: {
        Gram: '',
        Kilogram: '',
        Pound: '',
        Ounce: '',
      }
    },

    {
      name: 'Pressure',
      active: false,
      units: {
        Atmosphere: '',
        Pascal: '',
        Barr: '',
        Torr: '',
      }
    },

    {
      name: 'Time',
      active: false,
      units: {
        Second: '',
        Minute: '',
        Hour: '',
        Year: '',
      }
    }

  ]
};

export default firstState;
