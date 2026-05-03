interface Developer<T = null> {
  name: string;
  salary: string;
  device: {
    brand: string;
    model: string;
    relesedYear: string;
  };

  smartWatch?: T;
}

interface AppleWatch {
  hartRate: string;
  AiFeatures: boolean;
}

const poorDeveloper: Developer = {
  name: "Nill",
  salary: "20500",
  device: {
    brand: "Intel",
    model: "core i3 4th gen",
    relesedYear: "2015",
  },
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Arafat",
  salary: "80,000",
  device: {
    brand: "Apple",
    model: "M2",
    relesedYear: "2026",
  },
  smartWatch: {
    hartRate: "200",
    AiFeatures: true,
  },
};
