import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ModalProvider } from "./shared/context/modal-context"
import { ModalContainer } from "./shared/components/ModalContainer"
import { Toaster } from "./shared/components/ui/sonner"

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <ModalContainer />
      <Toaster position="top-right"/>
    </ModalProvider>
  )
}

export default App
