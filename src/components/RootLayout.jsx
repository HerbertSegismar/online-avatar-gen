import { Outlet } from "react-router-dom"
import Layout from "../Layout"

const RootLayout = () => {
  return (
    <div>
        <Layout>
            <Outlet/>
        </Layout>
    </div>
  )
}

export default RootLayout