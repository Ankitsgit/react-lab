# Chai aur React: Currency Converter Project Notes


## 2. Basic Currency Converter Interface
- Background is customizable or can be omitted.
- Central box contains the converter elements.
- Two identical input sections labeled "From" and "To":
  - Input field for currency amount.
  - Select box for currency type (USD, INR, etc.).
- "Swap" button to exchange "From" and "To" currencies.
- Focus on React functionality, not UI styling (CSS provided in notes).

## 3. Enhanced Functionality: API Calls for Currency Rates
- Fetches real-time conversion rates instead of using hardcoded values.
- Uses a "unique" API that updates rates dynamically.
- Covers API calls in React and dynamic URL manipulation.

## 4. Performance Optimization (Large Lists)
- Handling long lists in currency selection to prevent page lag.
- Techniques for optimized rendering in React.

## 5. Swap Functionality
- Updates state to reverse "From" and "To" currency selections.

## 6. Component Reusability
- Reusing identical input sections through a single `InputBox` component.
- Passes different props to maintain flexibility and efficiency.

## 7. Code Repository and Notes
- Available on GitHub under `hiteshchoudary` ("React in Hindi" series).
- Includes API link, CSS snippets, and `App.js` structure.
- Markdown preview in VS Code recommended.

## 8. Custom Hooks in React
- **Definition**: Functions that start with `use` and utilize React hooks.
- **Benefits**: Modular, reusable, and easier to understand.
- **Example**: `useCurrencyInfo` hook:
  - Uses `useState` to store fetched data.
  - Uses `useEffect` to handle API calls.
  - Dynamically updates based on selected currency.
  - Returns fetched currency data.

## 9. Creating Reusable Components (`InputBox`)
- **Props:**
  - `label` ("From", "To" labels).
  - `amount` (currency amount input).
  - `onAmountChange` (function to update state).
  - `currencyOptions` (list of available currencies).
  - `onCurrencyChange` (function to handle selection changes).
  - `selectedCurrency` (currently chosen currency).
  - `amountDisabled`, `currencyDisabled` (controls for enabling/disabling input/select).
  - `className` (CSS styling).
- **Event Handling:**
  - `onChange` event updates amount and selected currency.
  - `.map()` used to populate currency dropdown.

## 10. Component Export Strategy (`index.js`)
- Organizes and re-exports components from a central `index.js` file.
- Allows cleaner imports in `App.js`.

## 11. Optimizing Components with `useId` Hook
- Generates unique IDs for accessibility (`label` and `input` association).
- **Note:** `useId` should not be used for list keys.

## 12. Integrating Components and Hooks in `App.js`
- **State Management:**
  - `amount` (user input amount).
  - `fromCurrency`, `toCurrency` (selected currencies).
  - `convertedAmount` (conversion result).
- **Using Custom Hook:**
  - `useCurrencyInfo(fromCurrency)` fetches currency data.
- **Extracting Currency Options:**
  - `Object.keys(currencyInfo)` generates available currency list.
- **Functions:**
  - `swapCurrencies`: Swaps `fromCurrency` and `toCurrency`.
  - `convert`: Fetches conversion rate and updates `convertedAmount`.
- **Rendering InputBox Components:**
  - First `InputBox` for "From" currency (editable amount).
  - Second `InputBox` for "To" currency (disabled amount, bound to conversion result).
- **Handling Form Submission:**
  - `onSubmit` prevents default reload.
  - Displays conversion direction dynamically.

## 13. Debugging and Further Development
- **Debugging:** Addressing issues like `onAmountChange` not updating input.
- **Enhancements:**
  - UI improvements.
  - Default currency selections.
  - Better conversion direction display.

## Summary
- Covers essential React concepts: component reusability, state management (`useState`), side effects (`useEffect`), custom hooks, event handling, performance considerations, and accessibility.
- Hands-on learning with a practical currency converter project.
