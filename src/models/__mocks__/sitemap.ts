export const getEmptySitemap = (): string => {
    const emptySitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"/>
    `;
    return emptySitemap;
};

export const getSitemap = (): string => {
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/water-aid/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/water-aid/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/water-aid/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/water-aid/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/water-aid/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/water-aid/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/water-aid/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/water-aid/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/water-aid/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/water-aid/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/water-aid/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/water-aid/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/water-aid/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/water-aid/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/water-aid/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/water-aid/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/water-aid/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/water-aid/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/water-aid/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/water-aid/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/water-aid/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/water-aid/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/water-aid/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/water-aid/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/water-aid/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/water-aid/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/water-aid/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/water-aid/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/water-aid/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/water-aid/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/water-aid/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/water-aid/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/water-aid/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/water-aid/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/water-aid/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/water-aid/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/water-aid/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/kiva/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/kiva/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/kiva/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/kiva/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/kiva/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/kiva/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/kiva/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/kiva/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/kiva/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/kiva/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/kiva/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/kiva/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/kiva/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/kiva/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/kiva/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/kiva/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/kiva/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/kiva/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/kiva/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/kiva/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/kiva/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/kiva/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/kiva/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/kiva/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/kiva/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/kiva/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/kiva/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/kiva/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/kiva/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/kiva/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/kiva/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/kiva/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/kiva/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/kiva/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/kiva/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/kiva/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/kiva/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/action-against-hunger/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/action-against-hunger/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/action-against-hunger/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/action-against-hunger/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/action-against-hunger/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/action-against-hunger/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/action-against-hunger/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/action-against-hunger/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/action-against-hunger/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/action-against-hunger/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/action-against-hunger/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/action-against-hunger/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/action-against-hunger/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/action-against-hunger/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/action-against-hunger/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/action-against-hunger/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/action-against-hunger/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/action-against-hunger/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/action-against-hunger/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/action-against-hunger/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/action-against-hunger/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/action-against-hunger/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/action-against-hunger/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/action-against-hunger/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/action-against-hunger/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/action-against-hunger/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/action-against-hunger/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/action-against-hunger/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/action-against-hunger/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/action-against-hunger/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/action-against-hunger/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/action-against-hunger/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/action-against-hunger/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/action-against-hunger/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/action-against-hunger/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/action-against-hunger/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/action-against-hunger/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/navigators-usa/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/navigators-usa/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/navigators-usa/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/navigators-usa/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/navigators-usa/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/navigators-usa/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/navigators-usa/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/navigators-usa/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/navigators-usa/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/navigators-usa/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/navigators-usa/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/navigators-usa/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/navigators-usa/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/navigators-usa/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/navigators-usa/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/navigators-usa/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/navigators-usa/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/navigators-usa/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/navigators-usa/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/navigators-usa/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/navigators-usa/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/navigators-usa/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/navigators-usa/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/navigators-usa/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/navigators-usa/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/navigators-usa/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/navigators-usa/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/navigators-usa/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/navigators-usa/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/navigators-usa/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/navigators-usa/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/navigators-usa/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/navigators-usa/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/navigators-usa/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/navigators-usa/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/navigators-usa/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/navigators-usa/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/van-gogh-museum/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/van-gogh-museum/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/van-gogh-museum/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/van-gogh-museum/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/van-gogh-museum/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/van-gogh-museum/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/van-gogh-museum/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/van-gogh-museum/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/van-gogh-museum/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/van-gogh-museum/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/van-gogh-museum/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/van-gogh-museum/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/van-gogh-museum/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/van-gogh-museum/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/van-gogh-museum/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/van-gogh-museum/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/van-gogh-museum/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/van-gogh-museum/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/van-gogh-museum/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/van-gogh-museum/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/van-gogh-museum/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/van-gogh-museum/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/van-gogh-museum/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/van-gogh-museum/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/van-gogh-museum/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/van-gogh-museum/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/van-gogh-museum/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/van-gogh-museum/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/van-gogh-museum/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/van-gogh-museum/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/van-gogh-museum/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/van-gogh-museum/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/van-gogh-museum/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/van-gogh-museum/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/van-gogh-museum/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/van-gogh-museum/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/van-gogh-museum/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/charity-water/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/charity-water/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/charity-water/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/charity-water/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/charity-water/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/charity-water/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/charity-water/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/charity-water/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/charity-water/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/charity-water/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/charity-water/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/charity-water/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/charity-water/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/charity-water/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/charity-water/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/charity-water/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/charity-water/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/charity-water/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/charity-water/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/charity-water/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/charity-water/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/charity-water/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/charity-water/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/charity-water/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/charity-water/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/charity-water/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/charity-water/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/charity-water/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/charity-water/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/charity-water/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/charity-water/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/charity-water/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/charity-water/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/charity-water/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/charity-water/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/charity-water/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/charity-water/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/surui-tribe/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/surui-tribe/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/surui-tribe/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/surui-tribe/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/surui-tribe/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/surui-tribe/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/surui-tribe/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/surui-tribe/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/surui-tribe/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/surui-tribe/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/surui-tribe/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/surui-tribe/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/surui-tribe/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/surui-tribe/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/surui-tribe/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/surui-tribe/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/surui-tribe/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/surui-tribe/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/surui-tribe/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/surui-tribe/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/surui-tribe/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/surui-tribe/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/surui-tribe/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/surui-tribe/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/surui-tribe/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/surui-tribe/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/surui-tribe/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/surui-tribe/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/surui-tribe/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/surui-tribe/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/surui-tribe/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/surui-tribe/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/surui-tribe/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/surui-tribe/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/surui-tribe/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/surui-tribe/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/surui-tribe/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/witness/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/witness/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/witness/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/witness/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/witness/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/witness/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/witness/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/witness/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/witness/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/witness/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/witness/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/witness/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/witness/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/witness/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/witness/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/witness/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/witness/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/witness/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/witness/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/witness/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/witness/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/witness/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/witness/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/witness/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/witness/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/witness/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/witness/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/witness/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/witness/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/witness/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/witness/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/witness/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/witness/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/witness/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/witness/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/witness/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/witness/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/anaheim-ballet/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/anaheim-ballet/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/anaheim-ballet/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/anaheim-ballet/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/anaheim-ballet/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/anaheim-ballet/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/anaheim-ballet/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/anaheim-ballet/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/anaheim-ballet/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/anaheim-ballet/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/anaheim-ballet/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/anaheim-ballet/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/anaheim-ballet/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/anaheim-ballet/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/anaheim-ballet/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/anaheim-ballet/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/anaheim-ballet/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/anaheim-ballet/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/anaheim-ballet/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/anaheim-ballet/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/anaheim-ballet/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/anaheim-ballet/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/anaheim-ballet/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/anaheim-ballet/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/anaheim-ballet/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/anaheim-ballet/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/anaheim-ballet/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/anaheim-ballet/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/anaheim-ballet/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/anaheim-ballet/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/anaheim-ballet/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/anaheim-ballet/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/anaheim-ballet/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/anaheim-ballet/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/anaheim-ballet/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/anaheim-ballet/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/anaheim-ballet/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/crime-victims/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/crime-victims/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/crime-victims/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/crime-victims/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/crime-victims/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/crime-victims/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/crime-victims/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/crime-victims/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/crime-victims/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/crime-victims/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/crime-victims/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/crime-victims/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/crime-victims/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/crime-victims/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/crime-victims/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/crime-victims/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/crime-victims/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/crime-victims/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/crime-victims/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/crime-victims/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/crime-victims/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/crime-victims/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/crime-victims/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/crime-victims/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/crime-victims/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/crime-victims/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/crime-victims/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/crime-victims/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/crime-victims/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/crime-victims/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/crime-victims/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/crime-victims/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/crime-victims/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/crime-victims/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/crime-victims/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/crime-victims/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/crime-victims/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/direct-relief/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/direct-relief/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/direct-relief/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/direct-relief/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/direct-relief/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/direct-relief/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/direct-relief/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/direct-relief/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/direct-relief/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/direct-relief/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/direct-relief/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/direct-relief/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/direct-relief/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/direct-relief/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/direct-relief/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/direct-relief/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/direct-relief/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/direct-relief/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/direct-relief/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/direct-relief/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/direct-relief/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/direct-relief/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/direct-relief/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/direct-relief/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/direct-relief/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/direct-relief/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/direct-relief/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/direct-relief/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/direct-relief/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/direct-relief/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/direct-relief/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/direct-relief/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/direct-relief/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/direct-relief/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/direct-relief/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/direct-relief/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/direct-relief/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/fundacion-todo-mejora/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/fundacion-todo-mejora/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/jane-goodall/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/jane-goodall/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/jane-goodall/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/jane-goodall/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/jane-goodall/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/jane-goodall/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/jane-goodall/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/jane-goodall/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/jane-goodall/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/jane-goodall/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/jane-goodall/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/jane-goodall/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/jane-goodall/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/jane-goodall/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/jane-goodall/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/jane-goodall/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/jane-goodall/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/jane-goodall/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/jane-goodall/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/jane-goodall/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/jane-goodall/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/jane-goodall/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/jane-goodall/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/jane-goodall/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/jane-goodall/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/jane-goodall/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/jane-goodall/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/jane-goodall/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/jane-goodall/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/jane-goodall/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/jane-goodall/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/jane-goodall/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/jane-goodall/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/jane-goodall/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/jane-goodall/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/jane-goodall/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/jane-goodall/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/defense-council/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/defense-council/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/defense-council/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/defense-council/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/defense-council/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/defense-council/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/defense-council/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/defense-council/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/defense-council/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/defense-council/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/defense-council/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/defense-council/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/defense-council/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/defense-council/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/defense-council/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/defense-council/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/defense-council/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/defense-council/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/defense-council/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/defense-council/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/defense-council/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/defense-council/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/defense-council/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/defense-council/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/defense-council/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/defense-council/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/defense-council/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/defense-council/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/defense-council/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/defense-council/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/defense-council/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/defense-council/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/defense-council/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/defense-council/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/defense-council/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/defense-council/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/defense-council/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/nuru/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/nuru/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/nuru/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/nuru/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/nuru/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/nuru/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/nuru/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/nuru/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/nuru/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/nuru/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/nuru/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/nuru/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/nuru/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/nuru/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/nuru/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/nuru/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/nuru/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/nuru/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/nuru/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/nuru/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/nuru/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/nuru/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/nuru/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/nuru/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/nuru/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/nuru/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/nuru/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/nuru/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/nuru/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/nuru/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/nuru/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/nuru/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/nuru/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/nuru/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/nuru/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/nuru/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/nuru/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/rnli/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/rnli/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/rnli/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/rnli/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/rnli/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/rnli/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/rnli/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/rnli/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/rnli/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/rnli/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/rnli/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/rnli/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/rnli/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/rnli/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/rnli/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/rnli/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/rnli/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/rnli/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/rnli/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/rnli/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/rnli/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/rnli/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/rnli/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/rnli/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/rnli/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/rnli/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/rnli/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/rnli/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/rnli/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/rnli/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/rnli/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/rnli/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/rnli/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/rnli/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/rnli/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/rnli/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/rnli/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/worldgames/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/worldgames/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/worldgames/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/worldgames/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/worldgames/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/worldgames/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/worldgames/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/worldgames/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/worldgames/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/worldgames/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/worldgames/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/worldgames/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/worldgames/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/worldgames/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/worldgames/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/worldgames/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/worldgames/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/worldgames/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/worldgames/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/worldgames/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/worldgames/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/worldgames/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/worldgames/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/worldgames/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/worldgames/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/worldgames/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/worldgames/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/worldgames/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/worldgames/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/worldgames/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/worldgames/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/worldgames/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/worldgames/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/worldgames/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/worldgames/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/worldgames/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/worldgames/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/girl-scouts-of-japan/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/girl-scouts-of-japan/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/thrive-dc/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/thrive-dc/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/thrive-dc/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/thrive-dc/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/thrive-dc/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/thrive-dc/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/thrive-dc/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/thrive-dc/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/thrive-dc/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/thrive-dc/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/thrive-dc/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/thrive-dc/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/thrive-dc/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/thrive-dc/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/thrive-dc/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/thrive-dc/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/thrive-dc/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/thrive-dc/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/thrive-dc/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/thrive-dc/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/thrive-dc/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/thrive-dc/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/thrive-dc/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/thrive-dc/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/thrive-dc/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/thrive-dc/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/thrive-dc/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/thrive-dc/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/thrive-dc/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/thrive-dc/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/thrive-dc/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/thrive-dc/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/thrive-dc/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/thrive-dc/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/thrive-dc/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/thrive-dc/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/thrive-dc/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/go-volunteer/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/go-volunteer/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/go-volunteer/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/go-volunteer/" hreflang="de" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/reimagine-atl/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/reimagine-atl/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/reimagine-atl/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/switchboard/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/switchboard/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/switchboard/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/foodfinder/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/foodfinder/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/foodfinder/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/canada-learning-code/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/canada-learning-code/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/canada-learning-code/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/canada-learning-code/" hreflang="fr" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/how-to-guide/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/how-to-guide/be-productive-and-collaborative/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/be-productive-and-collaborative/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/be-productive-and-collaborative/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/how-to-guide/coordinate-your-nonprofit-board/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/coordinate-your-nonprofit-board/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/coordinate-your-nonprofit-board/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/how-to-guide/get-your-nonprofit-on-youtube/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/get-your-nonprofit-on-youtube/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/get-your-nonprofit-on-youtube/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/how-to-guide/googleanalytics/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/googleanalytics/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/googleanalytics/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/how-to-guide/manage-your-volunteers/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/manage-your-volunteers/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/how-to-guide/manage-your-volunteers/" hreflang="en" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/eligibility/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/eligibility/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/eligibility/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/eligibility/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/eligibility/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/eligibility/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/eligibility/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/eligibility/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/eligibility/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/eligibility/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/eligibility/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/eligibility/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/eligibility/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/eligibility/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/eligibility/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/eligibility/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/eligibility/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/eligibility/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/eligibility/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/eligibility/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/eligibility/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/eligibility/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/eligibility/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/eligibility/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/eligibility/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/eligibility/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/eligibility/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/eligibility/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/eligibility/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/eligibility/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/eligibility/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/eligibility/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/eligibility/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/eligibility/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/eligibility/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/eligibility/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/eligibility/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/certified-product-partners/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/certified-product-partners/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/certified-product-partners/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/resources/certified-product-partners/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/resources/certified-product-partners/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/resources/certified-product-partners/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/resources/certified-product-partners/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/resources/certified-product-partners/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/resources/certified-product-partners/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/resources/certified-product-partners/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/resources/certified-product-partners/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/resources/certified-product-partners/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/resources/certified-product-partners/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/resources/certified-product-partners/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/resources/certified-product-partners/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/resources/certified-product-partners/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/resources/certified-product-partners/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/resources/certified-product-partners/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/resources/certified-product-partners/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/resources/certified-product-partners/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/resources/certified-product-partners/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/resources/certified-product-partners/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/resources/certified-product-partners/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/resources/certified-product-partners/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/resources/certified-product-partners/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/resources/certified-product-partners/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/resources/certified-product-partners/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/resources/certified-product-partners/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/resources/certified-product-partners/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/resources/certified-product-partners/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/resources/certified-product-partners/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/resources/certified-product-partners/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/resources/certified-product-partners/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/resources/certified-product-partners/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/resources/certified-product-partners/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/resources/certified-product-partners/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/resources/certified-product-partners/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/coronavirus/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/coronavirus/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/coronavirus/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/resources/coronavirus/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/resources/coronavirus/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/resources/coronavirus/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/resources/coronavirus/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/resources/coronavirus/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/resources/coronavirus/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/resources/coronavirus/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/resources/coronavirus/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/resources/coronavirus/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/resources/coronavirus/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/resources/coronavirus/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/resources/coronavirus/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/resources/coronavirus/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/resources/coronavirus/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/resources/coronavirus/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/resources/coronavirus/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/resources/coronavirus/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/resources/coronavirus/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/resources/coronavirus/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/resources/coronavirus/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/resources/coronavirus/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/resources/coronavirus/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/resources/coronavirus/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/resources/coronavirus/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/resources/coronavirus/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/resources/coronavirus/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/resources/coronavirus/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/resources/coronavirus/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/resources/coronavirus/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/resources/coronavirus/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/resources/coronavirus/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/resources/coronavirus/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/resources/coronavirus/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/resources/coronavirus/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/faq/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/faq/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/faq/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/resources/faq/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/resources/faq/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/resources/faq/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/resources/faq/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/resources/faq/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/resources/faq/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/resources/faq/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/resources/faq/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/resources/faq/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/resources/faq/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/resources/faq/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/resources/faq/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/resources/faq/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/resources/faq/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/resources/faq/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/resources/faq/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/resources/faq/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/resources/faq/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/resources/faq/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/resources/faq/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/resources/faq/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/resources/faq/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/resources/faq/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/resources/faq/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/resources/faq/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/resources/faq/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/resources/faq/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/resources/faq/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/resources/faq/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/resources/faq/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/resources/faq/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/resources/faq/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/resources/faq/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/resources/faq/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/resources/product-help/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/resources/product-help/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/resources/product-help/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/resources/product-help/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/resources/product-help/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/resources/product-help/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/resources/product-help/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/resources/product-help/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/resources/product-help/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/resources/product-help/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/resources/product-help/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/resources/product-help/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/resources/product-help/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/resources/product-help/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/resources/product-help/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/resources/product-help/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/resources/product-help/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/resources/product-help/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/resources/product-help/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/resources/product-help/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/resources/product-help/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/resources/product-help/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/resources/product-help/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/resources/product-help/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/resources/product-help/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/resources/product-help/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/resources/product-help/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/resources/product-help/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/resources/product-help/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/resources/product-help/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/resources/product-help/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/resources/product-help/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/resources/product-help/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/resources/product-help/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/resources/product-help/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/resources/product-help/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/resources/product-help/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/success-stories/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/success-stories/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/success-stories/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/success-stories/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/success-stories/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/success-stories/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/success-stories/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/success-stories/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/success-stories/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/success-stories/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/success-stories/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/success-stories/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/success-stories/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/success-stories/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/success-stories/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/success-stories/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/success-stories/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/success-stories/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/success-stories/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/success-stories/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/success-stories/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/success-stories/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/success-stories/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/success-stories/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/success-stories/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/success-stories/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/success-stories/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/success-stories/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/success-stories/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/success-stories/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/success-stories/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/success-stories/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/success-stories/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/success-stories/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/success-stories/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/success-stories/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/workspace/compare/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/workspace/compare/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/workspace/compare/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/workspace/compare/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/workspace/compare/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/workspace/compare/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/workspace/compare/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/workspace/compare/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/workspace/compare/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/workspace/compare/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/workspace/compare/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/workspace/compare/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/workspace/compare/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/workspace/compare/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/workspace/compare/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/workspace/compare/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/workspace/compare/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/workspace/compare/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/workspace/compare/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/workspace/compare/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/workspace/compare/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/workspace/compare/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/workspace/compare/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/workspace/compare/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/workspace/compare/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/workspace/compare/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/workspace/compare/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/workspace/compare/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/workspace/compare/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/workspace/compare/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/workspace/compare/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/workspace/compare/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/workspace/compare/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/workspace/compare/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/workspace/compare/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/workspace/compare/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/workspace/compare/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/offerings/workspace/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/workspace/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/workspace/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/offerings/workspace/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/offerings/workspace/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/offerings/workspace/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/offerings/workspace/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/offerings/workspace/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/offerings/workspace/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/offerings/workspace/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/offerings/workspace/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/offerings/workspace/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/offerings/workspace/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/offerings/workspace/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/offerings/workspace/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/offerings/workspace/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/offerings/workspace/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/offerings/workspace/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/offerings/workspace/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/offerings/workspace/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/offerings/workspace/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/offerings/workspace/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/offerings/workspace/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/offerings/workspace/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/offerings/workspace/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/offerings/workspace/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/offerings/workspace/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/offerings/workspace/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/offerings/workspace/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/offerings/workspace/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/offerings/workspace/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/offerings/workspace/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/offerings/workspace/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/offerings/workspace/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/offerings/workspace/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/offerings/workspace/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/offerings/workspace/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/offerings/google-ad-grants/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/google-ad-grants/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/google-ad-grants/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/offerings/google-ad-grants/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/offerings/google-ad-grants/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/offerings/google-ad-grants/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/offerings/google-ad-grants/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/offerings/google-ad-grants/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/offerings/google-ad-grants/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/offerings/google-ad-grants/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/offerings/google-ad-grants/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/offerings/google-ad-grants/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/offerings/google-ad-grants/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/offerings/google-ad-grants/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/offerings/google-ad-grants/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/offerings/google-ad-grants/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/offerings/google-ad-grants/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/offerings/google-ad-grants/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/offerings/google-ad-grants/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/offerings/google-ad-grants/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/offerings/google-ad-grants/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/offerings/google-ad-grants/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/offerings/google-ad-grants/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/offerings/google-ad-grants/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/offerings/google-ad-grants/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/offerings/google-ad-grants/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/offerings/google-ad-grants/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/offerings/google-ad-grants/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/offerings/google-ad-grants/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/offerings/google-ad-grants/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/offerings/google-ad-grants/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/offerings/google-ad-grants/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/offerings/google-ad-grants/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/offerings/google-ad-grants/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/offerings/google-ad-grants/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/offerings/google-ad-grants/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/offerings/google-ad-grants/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/offerings/google-earth-and-maps/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/google-earth-and-maps/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/google-earth-and-maps/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/offerings/google-earth-and-maps/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/offerings/google-earth-and-maps/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/offerings/google-earth-and-maps/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/offerings/google-earth-and-maps/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/offerings/google-earth-and-maps/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/offerings/google-earth-and-maps/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/offerings/google-earth-and-maps/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/offerings/google-earth-and-maps/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/offerings/google-earth-and-maps/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/offerings/google-earth-and-maps/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/offerings/google-earth-and-maps/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/offerings/google-earth-and-maps/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/offerings/google-earth-and-maps/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/offerings/google-earth-and-maps/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/offerings/google-earth-and-maps/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/offerings/google-earth-and-maps/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/offerings/google-earth-and-maps/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/offerings/google-earth-and-maps/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/offerings/google-earth-and-maps/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/offerings/google-earth-and-maps/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/offerings/google-earth-and-maps/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/offerings/google-earth-and-maps/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/offerings/google-earth-and-maps/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/offerings/google-earth-and-maps/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/offerings/google-earth-and-maps/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/offerings/google-earth-and-maps/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/offerings/google-earth-and-maps/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/offerings/google-earth-and-maps/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/offerings/google-earth-and-maps/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/offerings/google-earth-and-maps/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/offerings/google-earth-and-maps/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/offerings/google-earth-and-maps/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/offerings/google-earth-and-maps/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/offerings/google-earth-and-maps/" hreflang="zh-TW" rel="alternate"/>
            </url>
            <url>
                <loc>https://www.google.com/nonprofits/offerings/youtube-nonprofit-program/</loc>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/youtube-nonprofit-program/" hreflang="x-default" rel="alternate"/>
                <xhtml:link href="https://www.google.com/nonprofits/offerings/youtube-nonprofit-program/" hreflang="en" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ar/nonprofits/offerings/youtube-nonprofit-program/" hreflang="ar" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bg/nonprofits/offerings/youtube-nonprofit-program/" hreflang="bg" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/bs/nonprofits/offerings/youtube-nonprofit-program/" hreflang="bs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/cs/nonprofits/offerings/youtube-nonprofit-program/" hreflang="cs" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/da/nonprofits/offerings/youtube-nonprofit-program/" hreflang="da" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/de/nonprofits/offerings/youtube-nonprofit-program/" hreflang="de" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/en-GB/nonprofits/offerings/youtube-nonprofit-program/" hreflang="en-GB" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es/nonprofits/offerings/youtube-nonprofit-program/" hreflang="es" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/es-419/nonprofits/offerings/youtube-nonprofit-program/" hreflang="es-419" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fi/nonprofits/offerings/youtube-nonprofit-program/" hreflang="fi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/fr/nonprofits/offerings/youtube-nonprofit-program/" hreflang="fr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hi/nonprofits/offerings/youtube-nonprofit-program/" hreflang="hi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/hu/nonprofits/offerings/youtube-nonprofit-program/" hreflang="hu" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/id/nonprofits/offerings/youtube-nonprofit-program/" hreflang="id" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/it/nonprofits/offerings/youtube-nonprofit-program/" hreflang="it" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/iw/nonprofits/offerings/youtube-nonprofit-program/" hreflang="iw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ja/nonprofits/offerings/youtube-nonprofit-program/" hreflang="ja" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ko/nonprofits/offerings/youtube-nonprofit-program/" hreflang="ko" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/nl/nonprofits/offerings/youtube-nonprofit-program/" hreflang="nl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pl/nonprofits/offerings/youtube-nonprofit-program/" hreflang="pl" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-BR/nonprofits/offerings/youtube-nonprofit-program/" hreflang="pt-BR" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/pt-PT/nonprofits/offerings/youtube-nonprofit-program/" hreflang="pt-PT" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ro/nonprofits/offerings/youtube-nonprofit-program/" hreflang="ro" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ru/nonprofits/offerings/youtube-nonprofit-program/" hreflang="ru" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sk/nonprofits/offerings/youtube-nonprofit-program/" hreflang="sk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sv/nonprofits/offerings/youtube-nonprofit-program/" hreflang="sv" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/sw/nonprofits/offerings/youtube-nonprofit-program/" hreflang="sw" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/th/nonprofits/offerings/youtube-nonprofit-program/" hreflang="th" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/tr/nonprofits/offerings/youtube-nonprofit-program/" hreflang="tr" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/uk/nonprofits/offerings/youtube-nonprofit-program/" hreflang="uk" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/ur/nonprofits/offerings/youtube-nonprofit-program/" hreflang="ur" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/vi/nonprofits/offerings/youtube-nonprofit-program/" hreflang="vi" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-CN/nonprofits/offerings/youtube-nonprofit-program/" hreflang="zh-CN" rel="alternate"/>
                <xhtml:link href="https://www.google.com/intl/zh-TW/nonprofits/offerings/youtube-nonprofit-program/" hreflang="zh-TW" rel="alternate"/>
            </url>
        </urlset>
    `;
    return sitemap;
};

export const getSitemapIndex = (): string => {
    const sitemapIndex = `
        <?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.google.com/schemas/sitemap/0.84">
            <sitemap>
                <loc>https://www.google.com/gmail/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/forms/sitemaps.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/slides/sitemaps.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/sheets/sitemaps.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/drive/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/docs/sitemaps.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/get/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/flights/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/admob/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/business/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/services/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/partners/about/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/adwords/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/search/about/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/adsense/start/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/retail/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/sitemap_search.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/webmasters/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/chromebook/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/chrome/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/calendar/about/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/photos/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/nonprofits/sitemap.xml</loc>
            </sitemap>
            <sitemap>
                <loc>https://www.google.com/finance/sitemap.xml</loc>
            </sitemap>
        </sitemapindex>    
    `;
    return sitemapIndex;
};
