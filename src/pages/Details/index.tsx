import { useHistory, useParams } from 'react-router-dom';
import { useMarvel } from '../../hooks/useMarvel';

import './styles.scss';

type CharacterId = {
    id: string;
}

export function Details() {
    const history = useHistory();
    const params = useParams<CharacterId>();
    const characters = useMarvel();

    const detailId = params.id;

    const character = characters.characters.find(character => character.name === detailId);

    function handleGoBack() {
        history.goBack();
    }

    return (
        <div className="details-content">
            <div>
                <img src={`${character?.thumbnail.path}/standard_fantastic.${character?.thumbnail.extension}`} alt={character?.name} />
            </div>
            <div>
                <p><strong>{character?.name}</strong></p>
                <p>{character?.description}</p>
                <button onClick={handleGoBack}>Voltar</button>
            </div>
        </div>
    )
}