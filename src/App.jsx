import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/StructuredData"

function App() {

  return (
    <>
    <StructuredData />
    <Toaster />
     <BrowserRouter basename="/">
     <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
