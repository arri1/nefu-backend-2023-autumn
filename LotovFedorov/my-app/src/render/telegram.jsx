import { UrbanBotTelegram } from '@urban-bot/telegram';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../App';
import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

dotenv.config();

const { TELEGRAM_TOKEN, PORT } = process.env;

const isDevelopment = process.env.NODE_ENV === 'development';

const client = new ApolloClient({
    link: new HttpLink({ uri: '/graphql', fetch }),
    cache: new InMemoryCache(),
});

if (!TELEGRAM_TOKEN) {
    throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');
}

const urbanBotTelegram = new UrbanBotTelegram({
    token: TELEGRAM_TOKEN,
    isPolling: isDevelopment,
});

render(
    <ApolloProvider client={client}>
        <Root bot={urbanBotTelegram} port={PORT ? Number(PORT) : undefined}>
            <App />
        </Root>
    </ApolloProvider>,
    () => console.log('telegram bot has started'),
);
