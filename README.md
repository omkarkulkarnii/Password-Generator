# React Multi-Length Password Generator

Welcome to the React Multi-Length Password Generator! This simple React application utilizes three essential React hooks - `useCallback`, `useRef`, and `useEffect` - to create a dynamic and responsive password generator. The generator updates and refreshes in real-time as you modify the settings for allowed characters and numbers.
Used Tailwind for styling..
## Features

- Generate passwords of varying lengths based on user input.
- Customize password settings by allowing or disallowing specific characters and numbers.
- Real-time updates and refreshes as you modify the settings.


## Configuration

You can customize the password generation by adjusting the following settings:

### 1. Password Length

Adjust the length of the generated password using the provided input field.

### 2. Allow Characters

Toggle the checkboxes to allow or disallow specific character sets in the generated password.

### 3. Allow Numbers

Toggle the checkbox to allow or disallow numbers in the generated password.

## Code Structure

The codebase is organized as follows:

- `src/App.jsx`: The root component where the PasswordGenerator logic is implemented.
- `/index.html`: HTML index page.
## React Hooks Used

1. **useCallback**: Used to memoize functions to prevent unnecessary re-renders.
2. **useRef**: Utilized for accessing and persisting values across renders.
3. **useEffect**: Employed for handling side effects and updating the UI dynamically.
