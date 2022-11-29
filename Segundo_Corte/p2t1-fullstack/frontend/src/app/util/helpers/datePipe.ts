export const datePipe = ( date: Date ) => {
    return String( new Date( date )
        .toLocaleString(
            'es-co',
            {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            }
        )
    )
}