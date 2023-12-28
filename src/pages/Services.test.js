import { fireEvent, render,screen } from "@testing-library/react";
import Services from "./Services";
import { BrowserRouter } from "react-router-dom";

it("services  should be render",()=>{
    render(<BrowserRouter><Services/></BrowserRouter>)
   const t= screen.getAllByTestId("mOver")
   //console.log(t)
 t.map((e)=> {fireEvent.mouseOver(e)
   fireEvent.mouseLeave(e)})
})

