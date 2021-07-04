import { useEffect } from 'react';
import { useState } from 'react';
import { useMarvel } from '../../hooks/useMarvel';
import { Character } from '../../components/Character';
import searchImg from './assets/search.svg';
import './styles.scss';


export function Home() {

    const [searchInput, setSearchInput] = useState('');

    const characters = useMarvel();

    async function handleSearch() {
        // characters.getSearchCharacter(searchInput);
        characters.setQuery(searchInput);
    }

    return (
        <div className="page-home">
            <header>
                <img src="./logo.svg" alt="Logo"></img>
                <div className="header-content">
                    <p><strong>Jonathan Dueck </strong> Teste de Front-end</p>
                </div>
            </header>
            <main className="content">
                <h2>Busca de personagens</h2>
                <p>Nome do personagem</p>
                <div className="search-input">
                    <input
                        placeholder="Search"
                        onChange={event => setSearchInput(event.target.value)}
                    >
                    </input>
                    <button onClick={handleSearch}><img src={searchImg} alt="Search"></img></button>
                </div>

                {console.log(characters.characters)}

                <table>
                    <thead>
                        <tr>
                            <td>Personagem</td>
                            <td>Séries</td>
                            <td>Eventos</td>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.characters.map(character => {
                            return (
                                <Character
                                    key={character.id}
                                    id={character.id}
                                    name={character.name}
                                    description={character.description}
                                    thumbnail={character.thumbnail}
                                    series={character.series}
                                    events={character.events}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </main>
            <footer>

            </footer>
        </div>
    );
}