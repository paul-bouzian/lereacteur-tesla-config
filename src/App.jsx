import "./App.css";
import ConfigButton from "./components/ConfigButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatePrice = () => {
      let price = 0;
      if (selectedVehicle === "Grande Autonomie") {
        price += 90700;
      } else if (selectedVehicle === "Performance") {
        price += 106700;
      }

      if (selectedColor === "Blanc Nacré Multicouches") {
        price += 0;
      } else if (selectedColor === "Noir Uni") {
        price += 1000;
      }

      setTotalPrice(price);
    };

    calculatePrice();
  }, [selectedVehicle, selectedColor]);

  return (
    <>
      <Header />

      <main className="flex flex-col items-center mt-10">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className=" text-2xl font-semibold">
            Sélectionnez votre véhicule
          </h2>
          <div className="flex flex-col w-full px-4 gap-2">
            <ConfigButton
              selectedOption={selectedVehicle}
              setSelectedOption={setSelectedVehicle}
              text="Grande Autonomie - 90 700 €"
              optionName={"Grande Autonomie"}
              setTotalPrice={setTotalPrice}
              selectedVehicle={selectedVehicle}
              selectedColor={selectedColor}
            />
            <ConfigButton
              selectedOption={selectedVehicle}
              setSelectedOption={setSelectedVehicle}
              text="Performance - 106 700 €"
              optionName={"Performance"}
              setTotalPrice={setTotalPrice}
              selectedVehicle={selectedVehicle}
              selectedColor={selectedColor}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full mt-8">
          <h2 className=" text-2xl font-semibold">Sélectionnez la couleur</h2>
          <div className="flex flex-col w-full px-4 gap-2">
            <ConfigButton
              selectedOption={selectedColor}
              setSelectedOption={setSelectedColor}
              text="Blanc Nacré Multicouches - 0 €"
              optionName={"Blanc Nacré Multicouches"}
              setTotalPrice={setTotalPrice}
              selectedVehicle={selectedVehicle}
              selectedColor={selectedColor}
            />
            <ConfigButton
              selectedOption={selectedColor}
              setSelectedOption={setSelectedColor}
              text="Noir Uni - 1 000 €"
              optionName={"Noir Uni"}
              setTotalPrice={setTotalPrice}
              selectedVehicle={selectedVehicle}
              selectedColor={selectedColor}
            />
          </div>
        </div>
        <div className=" mt-16 flex justify-center items-center gap-6">
          <h1 className="text-3xl ">{totalPrice.toLocaleString()} €</h1>
          <button className="rounded shadow-inner-white bg-blue-500 text-white px-4 py-2 hover:bg-blue-400 active:bg-blue-600">
            Buy !
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
