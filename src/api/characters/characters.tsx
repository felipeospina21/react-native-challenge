import { useQuery } from '@tanstack/react-query';
import { axiosQueryFn } from '../../utils/axiosQueryFn';
import { customFetch } from '../../utils/customFetch';
import type { AllCharacters, AllCharactersQueryParams, Character } from './types';

export function getCharacterQuery(id: number) {
  return useQuery(['character', id], () =>
    customFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  );
}

export function getAllCharactersQuery(params: AllCharactersQueryParams) {
  const formatedName = params.name?.trim();

  return useQuery({
    queryKey: ['characters', params],
    queryFn: () =>
      axiosQueryFn<AllCharacters>({
        baseURL: 'https://rickandmortyapi.com/api/character',
        params: {
          ...params,
          name: formatedName,
        },
      }),
    onError: (error) => console.log(error),
  });
}
