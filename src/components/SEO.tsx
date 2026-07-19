import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    name?: string;
    type?: string;
    path?: string;
}

export default function SEO({
    title,
    description,
    keywords,
    name = "RAMS Construct Ltd",
    type = "website",
    path = ""
}: SEOProps) {
    const url = `https://ramsconstruct.co.uk${path}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}

            {/* Canonical Link */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
}
