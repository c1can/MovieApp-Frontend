export function useStorage() {
    const getStorage = () => {
        const user = window.localStorage.getItem("user")
        return user ? JSON.parse(user): {rol: "anonimo", nombre: "anonimo", creditos: 0, correo: "no-registrado"}
    }

    return { getStorage }
}