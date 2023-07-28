import { createBrowserRouter } from "react-router-dom";
import Outlet from "./Componentes/RootLayout";
import Sobre from "./Componentes/Sobre";
import Projetos from "./Componentes/Projetos";
import Init from "./Componentes/Init";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet/>,
        children: [
            {
                index: true,
                element: <Init/>
            },
            {
                path:"/Sobre",
                element: <Sobre/>
            },
            {
                path:"/Projetos",
                element:<Projetos/>
            }
        ]
    }
])

export default router;