import { Route, Routes } from "react-router-dom"
import { Event } from "./components/pages/Event"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<>Yooooooo</>}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/event/lessons/:slug" element={<Event />}/>
    </Routes>
  )
}