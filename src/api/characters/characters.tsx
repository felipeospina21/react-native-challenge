import { useQuery } from '@tanstack/react-query';
import { customFetch } from '../../utils/customFetch';
import type { AllCharacters, Character } from './types';

export function getCharacterQuery(id: number) {
  return useQuery(['character', id], () =>
    customFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  );
}

export function getAllCharactersQuery(nameToFilter?: string) {
  const filter = nameToFilter ? nameToFilter : '';
  return useQuery(['characters', filter], () =>
    customFetch<AllCharacters>(`https://rickandmortyapi.com/api/character/?name=${filter}`)
  );
}
