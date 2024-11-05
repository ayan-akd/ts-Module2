{
  //generic interface

  interface Developer<T, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y;
  }

  interface XiaomiWatch {
    brand: string;
    model: string;
    display: string;
  }
  interface SamsungWatch {
    brand: string;
    model: string;
    display: string;
    heartTracking: boolean;
    sleepTracking: boolean;
  }
  interface Bike {
    brand: string;
    model: string;
    releaseYear: number;
  }
  const poorDeveloper: Developer<XiaomiWatch> = {
    name: "Ayan",
    computer: {
      brand: "Asus",
      model: "Good",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "xiaomi",
      model: "QCY",
      display: "Amoled",
    },
  };
  const richDeveloper: Developer<SamsungWatch, Bike> = {
    name: "Artho",
    computer: {
      brand: "Apple",
      model: "Best",
      releaseYear: 2025,
    },
    smartWatch: {
      brand: "Samsung",
      model: "Galaxy Watch 5",
      display: "OLED",
      heartTracking: true,
      sleepTracking: true,
    },
    bike: {
      brand: "Bicycle",
      model: "BMX",
      releaseYear: 2020,
    },
  };
}
