export class SessionStorageService {
    public static setItem ( key: string, value: unknown ) {
        return sessionStorage.setItem( key, JSON.stringify( value ) )
    }

    public static getItem ( key: string ) {
        return sessionStorage.getItem( key )
    }

    public static removeItem ( key: string ) {
        return sessionStorage.removeItem( key )
    }

    public static clearSessionStorage () {
        return sessionStorage.clear()
    }
}