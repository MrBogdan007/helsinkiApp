import { useAppSelector } from "../redux/hooks"


const Map = () => {
   const places = useAppSelector(state=>state.mapReducer)
  return (
    <div>Map</div>
  )
}

export default Map