import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";
import {ReactQueryDevtools} from "react-query/devtools";

export default function App({Component, pageProps}: AppProps) {

    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <div data-theme="winter" className={`min-h-screen bg-slate-50`}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </div>
    )
}
