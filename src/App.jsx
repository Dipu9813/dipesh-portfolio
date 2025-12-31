import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster"
import { PDFModal } from "@/components/PDFModal"

function App() {

  return (
    <>
    <Toaster />
    <PDFModal />
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
