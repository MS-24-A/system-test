import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es">
                <Head lang="es">
                    <meta itemProp="name" content="System" />
                    <meta itemProp="description" content="Administrador" />
                    <meta itemProp="image" content={`${process.env.HOST}/images/ico.svg`} />
                    <meta name="author" content="Miguel Sánchez" />
                </Head>

                <body className="bg-bgMain dark:bg-black duration-700 overflow-x-hidden bg-white" style={{ 'minHeight': '100vh' }}>
                    <Main className="h-screen" />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;