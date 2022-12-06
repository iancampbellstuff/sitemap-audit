const path = require('path');

module.exports = {
    process(sourceText, sourcePath, options) {
        // TODO: render an XML file as a string
        return {
            code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
        };
    },
};
