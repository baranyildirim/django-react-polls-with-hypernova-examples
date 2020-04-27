const hypernova = require('hypernova/server');
const renderReact = require('hypernova-react').renderReact;

require = require("esm")(module);

let config = {
    devMode: true,
    port: 3030,
    host: '0.0.0.0',
    getComponent(name, _context) {
        if (name.indexOf("Containers.") !== 0) {
            return null;
        }

        try {
            const componentName = name.split(".").slice(-1)[0];
            const Containers = require("./containers/");
            const Component = Containers[componentName];
            return renderReact(name, Component);
        } catch (e) {
            console.log(e)
            return null;
        }
    },
}

hypernova(config);
