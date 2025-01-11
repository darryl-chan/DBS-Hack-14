import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import { Flex } from "@mantine/core";

export default function Layout() {
  return (
    <Flex
      align="flex-start"
      justify="space-between"
      style={{
        width: '100vw'
      }}
    >
      <Navbar/>
      <div style={{ flexGrow: 1, padding: '2rem', height: '100vh' }}>
        <Outlet/>
      </div>
    </Flex>
  )
}