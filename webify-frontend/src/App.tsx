import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ModalProvider } from "./shared/context/modal-context"
import { ModalContainer } from "./shared/components/ModalContainer"

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <ModalContainer />
    </ModalProvider>
  )
}

export default App
