import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('app tests', () => {
  beforeEach(()=>{
    render(<App />);
  });

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  xtest('render getBytRole', () => {
    const {getByRole} = render(<App />);
    // hay toda una tabla para saber el valor implicito que trae un tag html en el atributo role
    //https://www.w3.org/TR/html-aria/#docconformance
    const element = getByRole('heading', {name: 'Nuevo'});
    expect(element).toBeInTheDocument();
  });

  test('validar el submit del formulario y el caso de error de un input', () => {
    //const errorMessage = screen.getByText('el nombre es requerido');
    const submitButton = screen.getByTestId('submitButton');
    userEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument();
  });

  test('waitfor', async () => {
    // usando waitFor se puede crear una promesa de un expect, para casos en los que haya que esperar un servicio y que
    // ese servicio habilite o deshabilite algo
    const inputName = screen.getByTestId('inputName');
    const inputButton = screen.getByTestId('submitButton');
    userEvent.type(inputName, 'enviando datos al servidor');
    expect(inputButton).toBeEnabled();
    userEvent.click(inputButton);
    expect(inputButton).toBeDisabled();
    await waitFor(async () => {
      expect(inputButton).toBeEnabled();
      expect(inputName).toHaveValue('');
    }, {timeout: 1200});
  });
})
