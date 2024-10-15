import { useState} from 'react';

let arr = ["Toppkasko", "Kasko med leiebil", "Kasko", "Minikasko", "Ansvar"];

const recommendedCarInsurance = arr[(Math.floor(Math.random() * arr.length))]

function App() {

  const[carInsurance, setCarInsurance] = useState(recommendedCarInsurance)

  const handleChange = (e: string) => {
    setCarInsurance(e)
  }

  const carInfo: {name: string, price: string, description: string}[] = [
    { name: 'Toppkasko', price: '1235 kr/mnd', description: 'Gir deg omfattende dekning for alle typer skader, inkludert uhell du selv har forårsaket. Perfekt for de som ønsker ekstra trygghet på veien.' },
    { name: 'Kasko med leiebil', price: '1179 kr/mnd', description: 'En forsikring som passer de fleste bilder. Dekker det meste av skader, også de du selv er ansvarlig for. Inkluderer: minikasko og ansvar.'},
    { name: 'Kasko', price: '1123 kr/mnd', description: 'Dekker skader på egen bil, også ved ulykker og hærverk. Egnet for de som ønsker en god standarddekning.'},
    { name: 'Minikasko', price: '491 kr/mnd', description: 'Gir dekning for brann, tyveri og glasskader. Passer for eldre biler eller de med lavere verdi.'},
    { name: 'Ansvar', price: '362 kr/mnd', description: 'Dekker kun skader på andre kjøretøy og eiendom. Obligatorisk forsikring som gir grunnleggende ansvarssikring.'},
  ]

  const carOptions = 
  carInfo.map(car => 
    <>
      {car.name === recommendedCarInsurance && (
        <div className="flex">
          <p className="font-primaryBold bg-[#d3d2f9] p-1 text-xs ml-3 mr-auto rounded-t-sm">Anbefalt</p>
        </div>
      )}

    <div 
      className={`border rounded-sm mb-4 cursor-pointer ${carInsurance === car.name ? 'font-primaryBold border-black' : 'font-primaryRegular'}`} // Apply different font if selected
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
    <div className="flex m-10"> {/* start of container*/}
      <div className="m-auto">
        <h1 className="font-primaryRegular mb-2">Velg dekning</h1>
          {carOptions}
      </div>
    </div> {/* end of container*/}
    </>
  )
}

export default App
