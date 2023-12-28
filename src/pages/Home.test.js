import { render,screen } from "@testing-library/react";
import Home from "./Home";
//import { BrowserRouter } from "react-router-dom";

it("Home should be render",()=>{
    render(<Home/>)
   const discovermore= screen.getByText("Discover More")
   expect(discovermore).toBeInTheDocument()
})