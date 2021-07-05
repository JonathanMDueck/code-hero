import { Md5 } from 'md5-typescript';
import { useEffect, useState } from 'react';

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

export function useMarvel() {

    // const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    // const privateKey = process.env.REACT_APP_PRIVATE_KEY;

    const publicKey = '4e817a02575ed5ddc53b55837456fb19';
    const privateKey = 'd222214f672f11bf3ff602e9db392ac9f9848827';
    const baseUrl = "http://gateway.marvel.com/v1/public/characters?";
    const timeStamp = Number(new Date);

    const hash = Md5.init(timeStamp + privateKey + publicKey);

    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [query, setQuery] = useState('');

    const searchParam = (query !== '' ? `&name=${encodeURIComponent(query)}` : '');

    useEffect(() => {
        fetch(`${baseUrl}limit=100&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}${searchParam}`)
            .then(response => response.json())
            .then(response => setCharacters(response.data.results));
    }, [query])

    return { characters, setQuery };
}

