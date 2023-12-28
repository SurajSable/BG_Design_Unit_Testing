import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

it("Navbar should be render",()=>{
    render(<BrowserRouter><Navbar/></BrowserRouter>)
const mEnter=screen.getByTestId("mOver")
fireEvent.mouseEnter(mEnter)
fireEvent.mouseLeave(mEnter)
const service=screen.getByTestId("service")
fireEvent.click(service)
const about =screen.getByText("About Us")
fireEvent.click(about)
const gallery =screen.getByText("Gallery")
fireEvent.click(gallery)
const contact =screen.getByText("Contact Us")
fireEvent.click(contact)
})