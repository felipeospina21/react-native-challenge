import { useQuery } from '@tanstack/react-query';
import { customFetch } from '../../utils/customFetch';
import type { AllCharacters, Character } from './types';

export function getCharacterQuery(id: number) {
  return useQuery(['character'], () =>
    customFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  );
}

export function getAllCharactersQuery() {
  return useQuery(['characters'], () =>
    customFetch<AllCharacters>(`https://rickandmortyapi.com/api/character`)
  );
}
