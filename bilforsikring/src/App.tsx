import { useState} from 'react';

// Possible car insurance options
let arr = ["Toppkasko", "Kasko med leiebil", "Kasko", "Minikasko", "Ansvar"];

// Randomly selects a car insurance option
const recommendedCarInsurance = arr[(Math.floor(Math.random() * arr.length))]

function App() {

  // State for selected car insurance, initially set to a random car insurance option
  const[carInsurance, setCarInsurance] = useState(recommendedCarInsurance)

  // Function to handle change of car insurance
  const handleChange = (insurance: string) => {
    setCarInsurance(insurance)
  }

  // Array of car insurance options with name, price and description. Could have come from a DB
  const carInfo: {name: string, price: string, description: string}[] = [
    { name: 'Toppkasko', price: '1235 kr/mnd', description: 'Gir deg omfattende dekning for alle typer skader, inkludert uhell du selv har forårsaket. Perfekt for de som ønsker ekstra trygghet på veien.' },
    { name: 'Kasko med leiebil', price: '1179 kr/mnd', description: 'En forsikring som passer de fleste bilder. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer: minikasko og ansvar.'},
    { name: 'Kasko', price: '1123 kr/mnd', description: 'Dekker skader på egen bil, også ved ulykker og hærverk. Egnet for de som ønsker en god standarddekning.'},
    { name: 'Minikasko', price: '491 kr/mnd', description: 'Gir dekning for brann, tyveri og glasskader. Passer for eldre biler eller de med lavere verdi.'},
    { name: 'Ansvar', price: '362 kr/mnd', description: 'Dekker kun skader på andre kjøretøy og eiendom. Obligatorisk forsikring som gir grunnleggende ansvarssikring.'},
  ]

  // Mapping through the car insurance options and displaying them
  const carOptions = 
  carInfo.map(car => 
    <>
      {/* Show the recomended tag on the correct insurance*/}
      {car.name === recommendedCarInsurance && (
        <div className="flex">
          <p className="font-primaryBold bg-[#d3d2f9] p-1 text-s ml-3 mr-auto rounded-t-sm">Anbefalt</p>
        </div>
      )}

    {/* Car insurance options */}
    <div 
      className={`w-[450px] border rounded-sm mb-4 cursor-pointer ${carInsurance === car.name ? 'font-primaryBold border-black' : 'font-primaryRegular'}`}
      key={car.name}
      onClick={() => handleChange(car.name)}>

      <span className="flex flex-wrap py-4 px-2">
        <div className="flex gap-2">
          <input
          className="
          text-black border border-black
          my-auto mx-2 cursor-pointer
          "
          type="radio"
          name="insurance"
          id={car.name}
          value={car.name}
          checked={carInsurance === car.name}
          onChange={() => handleChange(car.name)}
          />
          <label className="text-left cursor-pointer" htmlFor={car.name}>{car.name}</label>
        </div>

          <span className="ml-auto cursor-pointer">{car.price}</span>

          {/* Show description if the option is selected */}
          {carInsurance === car.name && (
            <div>
              <p className="mx-4 mt-4 font-primaryRegular">{car.description}</p>
            </div>
          )}

        </span>
      </div>
      </>
  )
  
  return (
    <>
    <a href="https://github.com/alfkristian02/bilforsikring"><img src="./images/github-mark.png" className="mt-10 ml-10 h-10" /></a>
    <div className="flex m-10"> {/* start of container*/}
      <div className="m-auto">
        <p className="font-primaryRegular mb-2">Velg dekning</p>
        {carOptions}
        <p className="font-primaryRegular">
          <a href="" className="border-b border-black hover:text-gray-700 hover:border-gray-700">Sammenlign dekninger</a>
        </p>
      </div>
    </div> {/* end of container*/}
    </>
  )
}

export default App
