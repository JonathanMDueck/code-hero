import { useHistory } from "react-router-dom";

type CharacterType = {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        extension: string;
        path: string;
    }
    series: {
        items: [{
            name: string;
        }]
    }
    events: {
        items: [{
            name: string;
        }]
    }
}

export function Character(props?: CharacterType) {

    const history = useHistory();

    function goToDetails(characterName: string | undefined) {
        history.push(`/details/${characterName}`)
    }

    return (
        <tr onClick={() => goToDetails(props?.name)}>
            <td><img src={`${props?.thumbnail.path}/standard_medium.${props?.thumbnail.extension}`} alt="" /><span>{props?.name}</span></td>
            <td>
                {props?.series.items.slice(0, 3).map((serie, index) => {
                    return (
                        <span key={index}>{serie.name}</span>
                    )
                })}
            </td>
            <td>{props?.events.items.slice(0, 3).map((event, index) => {
                return (
                    <span key={index}>{event.name}</span>
                )
            })}</td>
        </tr>
    );
}