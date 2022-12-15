import axios from 'axios';
import { requestGetAllSitemapUrls, reset } from '../sitemapUtils';
// TODO: import and use these files instead of using helper methods
// import emptySitemap from '../__mocks__/emptySitemap.xml';
// import sitemap from '../__mocks__/sitemap.xml';
// import sitemapIndex from '../__mocks__/sitemapIndex.xml';
import { getEmptySitemap, getSitemap, getSitemapIndex } from '../__mocks__/sitemap';

jest.mock('../envUtils', () => ({
    getEnvironmentVariables: () => ({
        SITEMAP_URL: 'https://www.google.com/sitemap.xml',
        URL_COUNT_THRESHOLD: 100
    })
}));

describe('sitemapUtils', () => {
    const emptySitemap = getEmptySitemap();
    const sitemap = getSitemap();
    const sitemapIndex = getSitemapIndex();
    describe('requestGetAllSitemapUrls', () => {
        let get;
        beforeEach(() => {
            get = jest.spyOn(axios, 'get');
        });
        afterEach(() => {
            jest.clearAllMocks();
            reset();
        });
        it('should return an empty array from an empty sitemap', async () => {
            get.mockImplementation(() => ({
                data: JSON.stringify(emptySitemap)
            }));
            const sitemapUrls = await requestGetAllSitemapUrls();
            expect(sitemapUrls).toHaveLength(0);
        });
        it('should return an array of URLs from a sitemap index', async () => {
            get.mockImplementationOnce(() => ({
                data: JSON.stringify(sitemapIndex)
            })).mockImplementation(() => ({
                data: JSON.stringify(sitemap)
            }));
            const sitemapUrls = await requestGetAllSitemapUrls();
            expect(sitemapUrls).toHaveLength(42);
        });
        it('should return an array of URLs from a sitemap', async () => {
            get.mockImplementation(() => ({
                data: JSON.stringify(sitemap)
            }));
            const sitemapUrls = await requestGetAllSitemapUrls();
            expect(sitemapUrls).toEqual([
                'https://www.google.com/nonprofits/',
                'https://www.google.com/nonprofits/eligibility/',
                'https://www.google.com/nonprofits/offerings/google-ad-grants/',
                'https://www.google.com/nonprofits/offerings/google-earth-and-maps/',
                'https://www.google.com/nonprofits/offerings/workspace/',
                'https://www.google.com/nonprofits/offerings/youtube-nonprofit-program/',
                'https://www.google.com/nonprofits/resources/certified-product-partners/',
                'https://www.google.com/nonprofits/resources/coronavirus/',
                'https://www.google.com/nonprofits/resources/faq/',
                'https://www.google.com/nonprofits/resources/how-to-guide/',
                'https://www.google.com/nonprofits/resources/how-to-guide/be-productive-and-collaborative/',
                'https://www.google.com/nonprofits/resources/how-to-guide/coordinate-your-nonprofit-board/',
                'https://www.google.com/nonprofits/resources/how-to-guide/get-your-nonprofit-on-youtube/',
                'https://www.google.com/nonprofits/resources/how-to-guide/googleanalytics/',
                'https://www.google.com/nonprofits/resources/how-to-guide/manage-your-volunteers/',
                'https://www.google.com/nonprofits/resources/product-help/',
                'https://www.google.com/nonprofits/success-stories/',
                'https://www.google.com/nonprofits/success-stories/action-against-hunger/',
                'https://www.google.com/nonprofits/success-stories/anaheim-ballet/',
                'https://www.google.com/nonprofits/success-stories/canada-learning-code/',
                'https://www.google.com/nonprofits/success-stories/charity-water/',
                'https://www.google.com/nonprofits/success-stories/crime-victims/',
                'https://www.google.com/nonprofits/success-stories/defense-council/',
                'https://www.google.com/nonprofits/success-stories/direct-relief/',
                'https://www.google.com/nonprofits/success-stories/foodfinder/',
                'https://www.google.com/nonprofits/success-stories/fundacion-todo-mejora/',
                'https://www.google.com/nonprofits/success-stories/girl-scouts-of-japan/',
                'https://www.google.com/nonprofits/success-stories/go-volunteer/',
                'https://www.google.com/nonprofits/success-stories/jane-goodall/',
                'https://www.google.com/nonprofits/success-stories/kiva/',
                'https://www.google.com/nonprofits/success-stories/navigators-usa/',
                'https://www.google.com/nonprofits/success-stories/nuru/',
                'https://www.google.com/nonprofits/success-stories/reimagine-atl/',
                'https://www.google.com/nonprofits/success-stories/rnli/',
                'https://www.google.com/nonprofits/success-stories/surui-tribe/',
                'https://www.google.com/nonprofits/success-stories/switchboard/',
                'https://www.google.com/nonprofits/success-stories/thrive-dc/',
                'https://www.google.com/nonprofits/success-stories/van-gogh-museum/',
                'https://www.google.com/nonprofits/success-stories/water-aid/',
                'https://www.google.com/nonprofits/success-stories/witness/',
                'https://www.google.com/nonprofits/success-stories/worldgames/',
                'https://www.google.com/nonprofits/workspace/compare/'
            ]);
        });
    });
    describe('reset', () => {
        let get;
        beforeEach(() => {
            get = jest.spyOn(axios, 'get');
        });
        afterEach(() => {
            jest.clearAllMocks();
            reset();
        });
        it('should reset the internal sitemap URL array', async () => {
            get.mockImplementationOnce(() => ({
                data: JSON.stringify(sitemapIndex)
            })).mockImplementation(() => ({
                data: JSON.stringify(sitemap)
            }));
            let sitemapUrls = await requestGetAllSitemapUrls();
            expect(sitemapUrls).toHaveLength(42);
            reset();
            get.mockImplementation(() => ({
                data: JSON.stringify(emptySitemap)
            }));
            sitemapUrls = await requestGetAllSitemapUrls();
            expect(sitemapUrls).toHaveLength(0);
        });
    });
});
