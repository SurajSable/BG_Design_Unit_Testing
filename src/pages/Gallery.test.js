import { fireEvent, render,screen } from "@testing-library/react";
import Gallery from "./Gallery";
//import { BrowserRouter } from "react-router-dom";

it("Gallery should be render & click on img",()=>{
    render(<Gallery/>)
    const img1=screen.getAllByRole("img")
    img1.map((e)=>fireEvent.click(e))
})

it("Gallery should be render & open img & close img",()=>{
    render(<Gallery/>)
    const img1=screen.getAllByRole("img")
    fireEvent.click(img1[0]);
    const hclose=screen.getByTestId("hclose");
    fireEvent.click(hclose);
})

it("open img & prev & next img",()=>{
    render(<Gallery/>)
    const img1=screen.getAllByRole("img")
    fireEvent.click(img1[1]);
    const hPrev=screen.getByTestId("hprev");
    fireEvent.click(hPrev);
    const hNext=screen.getByTestId("hnext");
    fireEvent.click(hNext);
})