import React from 'react'
import Head from 'next/head';

export default function Layouts(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            {props.children}
        </div>
    )
}
