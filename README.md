# react-native-challenge

A React Native (Expo) app built as a Halloween coding challenge. It's a character browser backed by the [Rick and Morty API](https://rickandmortyapi.com/), with sign in and sign up forms.

## Features

- Browse characters with a debounced search bar
- Filter by gender (Female, Male, Genderless, unknown)
- Character detail screen
- Sign in and sign up forms with schema validation
- Profile screen
- Gradient backgrounds and loading animations

## Tech stack

- [Expo](https://expo.dev/) 46 / React Native 0.69 / TypeScript
- React Navigation (native stack)
- TanStack React Query and Axios for data fetching
- React Hook Form and Zod for forms and validation
- NativeWind (Tailwind CSS) for styling
- Lottie for animations

## Getting started

Requires Node 18 (see `.nvmrc`).

```bash
npm install
npm start       # Expo dev server
npm run ios     # iOS simulator
npm run android # Android emulator
npm run web     # Web
```

## Project structure

```
src/
├── features/    # Screens: Home, Second, Third, SignIn, SignUp, Profile, CardDetail
├── components/  # Buttons, forms, filter, text, footer, error message
├── utils/       # Fetch and Axios helpers
└── styles/      # Theme
```

> This was a learning project and is not actively maintained.
