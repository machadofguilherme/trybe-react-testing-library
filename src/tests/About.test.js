import { screen } from '@testing-library/react';

import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Se a página contém as informações sobre a Pokédex.', () => {
  test('Se a página contém um heading h2 com o texto About Pokédex.', () => {
    renderWithRouter(<About />);

    const title = screen.getByRole(
      'heading',
      {
        name: 'About Pokédex',
        level: 2,
      },
    );

    expect(title).toBeVisible();
  });

  test('Se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);

    const p1 = screen.getByText(/simulates/i);
    const p2 = screen.getByText(/details/i);

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  test('Se a página contém a seguinte imagem de uma Pokédex.', () => {
    renderWithRouter(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    // Usei esta página como fonte de pesquisa.
    // https://dev.to/raphaelchaula/a-simple-image-test-in-react-3p6f
    // Estava com dificuldade em obter o src.

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', url);
    expect(img).toBeInTheDocument();
  });
});
