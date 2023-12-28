import { fireEvent, getByPlaceholderText, getByRole, getByTestId, render,screen } from "@testing-library/react";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";

it("Contact page should be rennder & name change & submit",()=>{
   render(<Contact />)  
   const nameInput=screen.getByPlaceholderText("NAME")
   fireEvent.change(nameInput,{target:{value:"suraj"}})
   const submitBtn=screen.getByRole("button");
   fireEvent.click(submitBtn)
})