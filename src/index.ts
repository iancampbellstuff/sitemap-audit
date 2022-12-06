import { requestGetAllSitemapUrls, requestTestUrls } from './utils';

(async () => {
    const sitemapUrls = await requestGetAllSitemapUrls();
    await requestTestUrls(sitemapUrls);
})().catch((error) => {
    console.error(error);
});
