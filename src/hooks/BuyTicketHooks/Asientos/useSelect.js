import { useAsientosContext } from "../../../hooks/BuyTicketHooks/useAsientosContext"

export function useSelect() {
    const { asientos, setAsientos } = useAsientosContext()


    const handleClick = (e, nm) => {
    let selectedAsiento = nm

    e.target.style.backgroundColor = "green"
    e.target.style.color = "white"

    const alreadySelected = asientos.some(asiento => asiento.nm == selectedAsiento)

    if(alreadySelected) {
     setAsientos(asientos.filter(asiento => asiento.nm !== selectedAsiento))
     e.target.style.backgroundColor = "#0d1b2a"
     e.target.style.color = "white"

     return
    }

    let selected1 = {
      nm: selectedAsiento,
      reservado: true,
      valor: 100
    }
    
    setAsientos(prev => prev.concat(selected1))
  }

  return { handleClick }
}