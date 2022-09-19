import { screen } from '@testing-library/react';

import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testes do componente <NotFound />.', () => {
  test('Se a página contém um h2 com o texto "Page requested not found".', () => {
    renderWithRouter(<NotFound />);

    const notFound = screen.getByRole(
      'heading',
      { name: 'Page requested not found', level: 2 },
    );

    expect(notFound).toBeInTheDocument();
  });

  test('Se a página mostra a imagem: https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.', () => {
    renderWithRouter(<NotFound />);

    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', url);
  });
});
