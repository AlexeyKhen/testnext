import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import {loadTranslation} from "../utils";
import {Trans} from "@lingui/macro";
import {useCurrentLocale} from "../useCurrentLocale";
import {t} from "@lingui/macro";


export const getStaticProps: GetStaticProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === "production",
    );

    return {
        props: {
            translation,
        },
    };
};
// Это единственный текст
const Home: NextPage = () => {
    const currentLocale = useCurrentLocale();
    return (
        <div>
            <Head>
                <title>My own site with blackjack and sluts</title>
                <meta
                    name="title"
                    content={t`Это единственный текст`}
                />
                <meta
                    name="description"
                    content={t`Это единственный текст`}
                />

                <meta property="og:type" content="website"/>
                <meta property="fb:app_id" content="966242223397117"/>
                <meta property="og:locale" content="ru_RU"/>
                {/*<meta property="og:url" content={`https://testnext-lake.vercel.app/${currentLocale}`}/>*/}
                <meta property="og:url" content={`https://testnext-lake.vercel.app`}/>

                <meta
                    property="og:title"
                    content={t`Это единственный текст`}
                />
                <meta
                    property="og:description"
                    content={t`Это единственный текст`}
                />
                <meta
                    property="og:image"
                    content={`https://testnext-lake.vercel.app/meta_image_${currentLocale}.jpg`}
                />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="testnext-lake.vercel.app"/>
                <meta property="twitter:url" content="https://testnext-lake.vercel.app"/>
                <meta name="twitter:title" content={t`Это единственный текст`}/>
                <meta name="twitter:description" content={t`Это единственный текст`}/>
                <meta name="twitter:image"
                      content={`https://testnext-lake.vercel.app/meta_image_${currentLocale}.jpg`}/>

                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Trans>Это единственный текст</Trans>
            </div>
        </div>
    )
}

export default Home
