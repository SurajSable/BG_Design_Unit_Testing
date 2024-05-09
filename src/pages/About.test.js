import { render,screen,act} from "@testing-library/react";
import About from "./About";
import { BrowserRouter } from "react-router-dom";
// import { act } from "react-dom/test-utils";
import { pdata } from "../mocks/postal";
import Axios from "axios";

jest.mock('Axios');

it("About should be render with postal data", async () => {
    // Mock Axios
    jest.spyOn(Axios, 'get').mockResolvedValue({ data: pdata });
  
    // Render the component within act
    await act(async () => {
      render(<BrowserRouter><About /></BrowserRouter>);
    });
  
    // Query elements
    const heading = screen.getAllByRole("heading");
    const about = screen.getByText("ABOUT US");
  
    // Expectations
    expect(heading[0]).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });
// it("About should be render ",()=>{
//     render(<BrowserRouter><About/></BrowserRouter>)
//     const heading=screen.getAllByRole("heading")
//     expect(heading[0]).toBeInTheDocument()
//     const about=screen.getByText("ABOUT US")
//     expect(about).toBeInTheDocument()
// })