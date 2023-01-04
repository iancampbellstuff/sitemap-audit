import { Sitemap } from './models';

(async () => {
    const sitemap = await Sitemap.getInstanceOf();
    await sitemap.printAudit();
})().catch((error) => {
    console.error(error);
});
