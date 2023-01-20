import { Sitemap } from './models';

(async () => {
    const sitemap = await Sitemap.getInstanceOf();
    sitemap.printAudit();
})().catch((error) => {
    console.error(error);
});
