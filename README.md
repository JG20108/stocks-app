# Stocks App 📈

This application is built using React, TypeScript, and Vite, providing real-time stock information leveraging the Finnhub API 🌐. It's designed with a focus on modularity and reusability, featuring multiple components that handle different aspects of the application.

## Live Demo 🚀

Check out the live demo of the Stocks App here: [Stocks App Live Demo](https://stocks-dh1u6e81r-jg20108.vercel.app)

## Application Structure 🏗️

The Stocks App is structured into several key components, each responsible for a distinct part of the application's functionality:

- **HomePage**: Serves as the landing page of the application, aggregating data and components related to stock information.
- **StockSelectionForm**: Allows users to select a stock from a predefined list and set an alert price 🛎️. This component is crucial for user interaction, enabling them to customize their stock tracking experience.
- **StockCard**: Displays individual stock information, such as the current value, margin change, and price change 💹. It visually represents the stock data in a concise and user-friendly manner.
- **StockGraph**: Utilizes Chart.js to render a graphical representation of a stock's price history 📊. This component enhances the application by providing a visual analysis tool for users.

## Technologies Used 💻

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A modern frontend build tool.
- **Chart.js**: Simple yet flexible JavaScript charting for designers & developers.
- **React Chartjs-2**: React components for Chart.js.
- **React Redux**: Official React bindings for Redux.
- **Socket.IO-Client**: Real-time bidirectional event-based communication.

## Dependencies 📦

- `chart.js`
- `react`
- `react-chartjs-2`
- `react-dom`
- `react-redux`
- `socket.io-client`

## Development Dependencies 🔧

- `@types/node`
- `@types/react`
- `@types/react-dom`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `@vitejs/plugin-react`
- `autoprefixer`
- `eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `postcss`
- `tailwindcss`
- `typescript`
- `vite`

## Stock Options 🗂️

The application tracks the following stocks:

- AAPL 🍏
- GOOGL 🖥️
- BINANCE:BTCUSDT ₿
- IC MARKETS:1 📈
- MSFT 💼
- AMZN 🛒
- BYND 🌱
- UPOW 🔋
- EXCOF 🏭
- FSLY 🚀
- AMD 🖥️
- TSLA 🚗

## Credits 👏

Special thanks to [Finnhub](https://finnhub.io/) for providing free access to their API. For more information on the Finnhub API, visit their [documentation](https://finnhub.io/docs/api/introduction).