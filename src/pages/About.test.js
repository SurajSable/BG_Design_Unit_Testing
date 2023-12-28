import { render,screen } from "@testing-library/react";
import About from "./About";
import { BrowserRouter } from "react-router-dom";

it("About should be render",()=>{
    render(<BrowserRouter><About/></BrowserRouter>)
    const heading=screen.getAllByRole("heading")
    expect(heading[0]).toBeInTheDocument()
    const about=screen.getByText("ABOUT US")
    expect(about).toBeInTheDocument()
})