import { SitemapHandler } from './handlers';

(async () => {
    const sitemapHandler = new SitemapHandler();
    await sitemapHandler.requestPrintUrlStatusTable();
})().catch((error) => {
    console.error(error);
});
