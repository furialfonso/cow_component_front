import { BrowserRouter } from "react-router-dom";
import { UserRouter } from './router/UserRouter'

function App() {
  return (
    <BrowserRouter>
      <UserRouter />
    </BrowserRouter>
  )
}

export default App
