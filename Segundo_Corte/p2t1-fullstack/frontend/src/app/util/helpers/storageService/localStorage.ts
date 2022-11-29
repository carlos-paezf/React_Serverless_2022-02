export class LocalStorageService {
    public static setItem ( key: string, value: unknown ) {
        return localStorage.setItem( key, JSON.stringify( value ) )
    }

    public static getItem ( key: string ) {
        return localStorage.getItem( key )
    }

    public static removeItem ( key: string ) {
        return localStorage.removeItem( key )
    }

    public static clearLocalStorage () {
        return localStorage.clear()
    }
}