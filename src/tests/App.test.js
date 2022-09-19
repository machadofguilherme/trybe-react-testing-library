import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 1', () => {
  test('Se contém um conjunto fixo de links de navegação.', () => {
    renderWithRouter(<App />);

    const Home = screen.getByRole('link', { name: 'Home' });
    const About = screen.getByRole('link', { name: 'About' });
    const Favorite = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(Home).toBeInTheDocument();
    expect(About).toBeInTheDocument();
    expect(Favorite).toBeInTheDocument();
  });

  test('Se redireciona para a página inicial ao clicar no link  Home.', () => {
    const { history } = renderWithRouter(<App />);

    const Home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(Home);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  test('Se redireciona para a página About ao clicar no link About.', () => {
    const { history } = renderWithRouter(<App />);
    const About = screen.getByRole('link', { name: 'About' });

    userEvent.click(About);
    act(() => {
      history.push('/about');
    });

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Se redireciona para Pokémons Favoritados ao clicar em Favorite Pokémons.', () => {
    const { history } = renderWithRouter(<App />);
    const Favorites = screen.getByRole('link', { name: 'About' });

    userEvent.click(Favorites);
    act(() => {
      history.push('/favorites');
    });

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Se redireciona para Not Found ao acessar uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/xablau');
    });
    console.log(history.location.pathname);

    const notFound = screen.getByRole(
      'heading',
      { name: 'Page requested not found', level: 2 },
    );

    expect(notFound).toBeInTheDocument();
  });
});
