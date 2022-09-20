import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testes para o componente <Pokemon.js />.', () => {
  test('Se é renderizado um card com informações de determinado pokémon.', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId('pokemon-name');
    expect(name).toBeVisible();

    const type = screen.getByTestId('pokemon-type').textContent;
    expect(type).toBe('Electric');

    const weight = screen.getByText('Average weight: 6.0 kg');
    expect(weight).toBeVisible();

    const img = screen.getByRole('img');
    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(img).toHaveAttribute('src', url);
    expect(img).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('Se contém um link para exibir detalhes deste pokémon.', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    expect(link).toHaveAttribute('href', '/pokemons/25');
  });

  test('Se ao clicar no link, redireciona para a página de detalhes.', () => {
    const { history } = renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Se existe um ícone de estrela nos pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: 'More details' });
    userEvent.click(details);

    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(checkbox);

    const favorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favorite);

    const star = screen.getAllByRole('img');
    expect(star[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(star[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
