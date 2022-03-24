import {render, screen} from "@testing-library/react";
import {ReactTesting} from "../components/ReactTesting";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('test para el component reacttesting', ()=>{

    test('render component', () => {
        render(<ReactTesting />)
        // screen.debug(); // imprime lo que renderizo
        const h1 = screen.getByText('Buenos días');
        expect(h1).toBeInTheDocument();
    });

    test('initial value sould be 0', () => {
        render(<ReactTesting />);
        const result = screen.getByText('clicks: 0')
        expect(result).toBeInTheDocument();
    });

    test('initial value sould be 0', () => {
        render(<ReactTesting />);
        const button = screen.getByText('CLIQUEADOR', {selector: 'button'});
        userEvent.click(button);
        const result = screen.getByText('clicks: 1')
        expect(result).toBeInTheDocument();
    });
})
