import { useLocation } from "wouter"

export function useSession() {

  const [path, setPath] = useLocation()

  const closeSession = (e) => {
    const inputValue = e.target.value

    if(inputValue === 'Iniciar Sesion') return setPath('/login')

    window.localStorage.clear()
    window.location.reload(false) 
  }

  return { closeSession }
}