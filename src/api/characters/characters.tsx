import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { customFetch } from '../../utils/customFetch';
import type { AllCharactersQueryParams, Character } from './types';

export function getCharacterQuery(id: number) {
  return useQuery(['character', id], () =>
    customFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  );
}

export function getAllCharactersQuery(params: AllCharactersQueryParams) {
  const formatedName = params.name?.trim();

  return useQuery({
    queryKey: ['characters', params],
    queryFn: ({ signal }) =>
      axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          ...params,
          name: formatedName,
        },
        signal,
      }),
    // axiosQueryFn<AllCharacters>({
    //   baseURL: 'https://rickandmortyapi.com/api/character',
    //   params: {
    //     ...params,
    //     name: formatedName,
    //   },
    // }),
    // onError: (error) => console.log(error),
  });
}
