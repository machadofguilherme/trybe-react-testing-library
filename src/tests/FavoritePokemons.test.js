import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Testes para o componente <FavoritePokemons />.', () => {
  test('Se é exibida a mensagem "No favorite pokemon found".', () => {
    renderWithRouter(<FavoritePokemons />);

    const phrase = screen.getByText('No favorite pokemon found');

    expect(phrase).toBeInTheDocument();
  });

  test('Se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: 'More details' });
    userEvent.click(details);

    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(checkbox);

    const favorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favorite);

    const pokemon = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    const url = '/star-icon.svg';
    expect(pokemon).toHaveAttribute('src', url);
  });
});
