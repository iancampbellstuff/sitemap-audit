import * as axiosUtils from '../axiosUtils';

describe('axiosUtils', () => {
    describe('toggleAxiosErrors', () => {
        const { toggleAxiosErrors } = axiosUtils;
        let toggleRequestErrors;
        let toggleResponseErrors;
        beforeEach(() => {
            toggleRequestErrors = jest.spyOn(axiosUtils, 'toggleRequestErrors').mockImplementation(() => { });
            toggleResponseErrors = jest.spyOn(axiosUtils, 'toggleResponseErrors').mockImplementation(() => { });
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('should enable axios errors', () => {
            const enable = true;
            toggleAxiosErrors(enable);
            expect(toggleRequestErrors).toHaveBeenCalledWith(enable);
            expect(toggleResponseErrors).toHaveBeenCalledWith(enable);
        });
        it('should disable axios errors', () => {
            const enable = false;
            toggleAxiosErrors(enable);
            expect(toggleRequestErrors).toHaveBeenCalledWith(enable);
            expect(toggleResponseErrors).toHaveBeenCalledWith(enable);
        });
    });
});
