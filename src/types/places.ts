export interface Place {
   id: number,
   name: {
      en: string
   },
   address: {
      street_address: string
   },
   oppening_hours: {
      hours: [
         weekday_id: number,
         opens: string,
         closes: string
      ]
   },
   location: {
      lat: number,
      lon: number
   }
}