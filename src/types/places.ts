import { Week } from "./week"

export interface Place {
   id: number,
   name: {
      en: string
   },
  
   location: {
      lat: number,
      lon: number
      address: {
      
         street_address: string
   }
},
opening_hours: {
   hours: Week[]
}

}
