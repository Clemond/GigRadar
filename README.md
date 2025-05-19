# React Native Expo App

This is a mobile app built using [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/), featuring Firebase integration, navigation, offline caching, and more.

## Features

- Expo SDK 52
- Firebase integration
- Async storage
- Location services
- Calendar access
- Zustand for state management
- React Query for data fetching
- React Navigation
- React Native Paper components

---

## Installation

```bash
git clone https://github.com/Clemond/GigRadar.git
cd GigRadar
npm install
```

## Firebase Configuration

This project requires a custom firebaseConfig.ts file with your Firebase credentials.

⚠️ This file is excluded from version control for security reasons.
You must create it manually before running the app.

Setup Instructions:
Copy the firebaseConfigExample.ts config file:

cp firebaseConfigExample.ts firebaseConfig.ts
Open firebaseConfig.ts and replace the placeholder values with your actual Firebase project details:

## Running the App

Once dependencies are installed and Firebase is configured, you can run the app with:

```bash
npx expo start
```

This will launch the Expo developer tools in your browser.

Then, choose one of the following to launch the app:

Press a to open the app on an Android emulator or device

Press i to open the app on an iOS simulator

Scan the QR code using the Expo Go app on your physical device

## Tech Stack

- React Native (Expo)
- Firebase
- React Query
- Zustand
- React Navigation
- TypeScript
- Axios

## Licenses

All dependencies and their licenses can be found in LICENSES.md.

## Notes

Make sure to set up your Firebase project before running the app.

This app is optimized for mobile — some functionality may not work in the Expo Web environment.
