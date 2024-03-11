# Stocks App 📈

This application is built using React, TypeScript, and Vite, providing real-time stock information leveraging the Finnhub API 🌐. It's designed with a focus on modularity and reusability, featuring multiple components that handle different aspects of the application.

## Live Demo 🚀

Check out the live demo of the Stocks App here: [Stocks App Live Demo](https://stocks-hgq496ao1-jg20108.vercel.app)

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
- **Firebase**: A comprehensive app development platform that provides functionalities like authentication, databases, cloud messaging, and more.

## Dependencies 📦

- `chart.js`: A powerful data visualization library that allows you to create interactive graphs and charts in JavaScript.
- `react`: A JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.
- `react-chartjs-2`: A React wrapper for Chart.js, making it easy to create Chart.js components within a React application.
- `react-dom`: The package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements with React.
- `react-redux`: The official React bindings for Redux, it lets your React components read data from a Redux store, and dispatch actions to the store to update data.
- `socket.io-client`: The client-side library of Socket.IO, it enables real-time, bidirectional, and event-based communication between web clients and servers.
- `dotenv`: A zero-dependency module that loads environment variables from a `.env` file into `process.env`, making it easier to manage configuration in different environments.
- `firebase`: Google's mobile and web application development platform that provides a variety of tools and services including authentication, real-time database, cloud storage, and cloud messaging.
- `vite-plugin-pwa`: A plugin for Vite that makes it easy to build a Progressive Web App (PWA), complete with service workers, offline support, and web manifest.

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

## Firebase Cloud Messaging and Notifications 📲

Firebase Cloud Messaging (FCM) is integrated into the Stocks App to enable real-time push notifications. This allows the app to notify users when certain conditions are met, such as when a stock price goes below a set alert level.

FCM is used in conjunction with service workers to manage background notifications and to provide users with timely updates even when the app is not actively being used.

## Credits 👏

Special thanks to [Finnhub](https://finnhub.io/) for providing free access to their API. For more information on the Finnhub API, visit their [documentation](https://finnhub.io/docs/api/introduction).