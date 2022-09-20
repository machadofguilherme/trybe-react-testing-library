import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import pokemons from '../data';
import renderWithRouter from '../renderWithRouter';

const content = 'Próximo pokémon';

describe('Testes para o componente <Pokedex.js />.', () => {
  test('Se a página contém um h2 com o texto "Encountered pokémons".', () => {
    renderWithRouter(<App />);

    const phrase = screen.getByRole(
      'heading',
      {
        name: 'Encountered pokémons',
        level: 2,
      },
    );

    expect(phrase).toBeVisible();
  });

  test('Se é exibido o próximo pokémon da lista.', () => {
    renderWithRouter(<App />);

    const next = screen.getByRole('button', { name: content });
    userEvent.click(next);

    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeVisible();

    userEvent.click(next);

    const caterpie = screen.getByText('Caterpie');
    expect(caterpie).toBeVisible();

    userEvent.click(next);

    const ekans = screen.getByText('Ekans');
    expect(ekans).toBeVisible();

    userEvent.click(next);

    const alakazan = screen.getByText('Alakazam');
    expect(alakazan).toBeVisible();

    userEvent.click(next);

    const mew = screen.getByText('Mew');
    expect(mew).toBeVisible();

    userEvent.click(next);

    const rapidash = screen.getByText('Rapidash');
    expect(rapidash).toBeVisible();

    userEvent.click(next);

    const snorlax = screen.getByText('Snorlax');
    expect(snorlax).toBeVisible();

    userEvent.click(next);

    const dragonair = screen.getByText('Dragonair');
    expect(dragonair).toBeVisible();

    userEvent.click(next);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeVisible();
  });

  test('Se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);

    // Com a ajuda de Arthur Debiasi.

    pokemons.forEach(({ type }) => {
      const button = screen.getByRole('button', { name: type });
      const x = screen.getAllByTestId('pokemon-type-button');
      expect(button).toBeInTheDocument();
      expect(x[0]).toBeInTheDocument();
      expect(x[1]).toBeInTheDocument();
      expect(x[2]).toBeInTheDocument();
      expect(x[3]).toBeInTheDocument();
      expect(x[4]).toBeInTheDocument();
      expect(x[5]).toBeInTheDocument();
      expect(x[6]).toBeInTheDocument();

      userEvent.click(button);
    });
  });

  test('Se a Pokédex contém um botão para resetar o filtro.', () => {
    renderWithRouter(<App />);

    const all = screen.getByRole('button', { name: 'All' });
    userEvent.click(all);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeVisible();

    const next = screen.getByRole('button', { name: content });
    userEvent.click(next);

    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeVisible();

    userEvent.click(next);

    const caterpie = screen.getByText('Caterpie');
    expect(caterpie).toBeVisible();

    userEvent.click(next);

    const ekans = screen.getByText('Ekans');
    expect(ekans).toBeVisible();

    userEvent.click(next);

    const alakazan = screen.getByText('Alakazam');
    expect(alakazan).toBeVisible();

    userEvent.click(next);

    const mew = screen.getByText('Mew');
    expect(mew).toBeVisible();

    userEvent.click(next);

    const rapidash = screen.getByText('Rapidash');
    expect(rapidash).toBeVisible();

    userEvent.click(next);

    const snorlax = screen.getByText('Snorlax');
    expect(snorlax).toBeVisible();

    userEvent.click(next);

    const dragonair = screen.getByText('Dragonair');
    expect(dragonair).toBeVisible();

    userEvent.click(next);

    expect(pikachu).toBeVisible();
    expect(all).toBeVisible();
  });
});
