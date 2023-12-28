import { render,screen } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

it("Footer should be render",()=>{
    render(<BrowserRouter><Footer/></BrowserRouter>)
})