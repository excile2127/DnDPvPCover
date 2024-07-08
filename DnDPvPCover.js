// Github:   https://github.com/excile2127
// By:       Andrew Moreno
// Contact:  https://app.roll20.net/users/11576207/excile2127

// Initialize ScriptInfo meta variables
var API_Meta = API_Meta || {};
API_Meta.dndpvpcover = { offset: Number.MAX_SAFE_INTEGER, lineCount: -1 };
{ try { throw new Error(''); } catch (e) { API_Meta.dndpvpcover.offset = (parseInt(e.stack.split(/\n/)[1].replace(/^.*:(\d+):.*$/, '$1'), 10) - (13)); } }

// Revealing module pattern (RMP) enclosure
const dndpvpcover = (() => { // eslint-disable-line no-unused-vars

    // Initialize RMP meta variables
    const scriptName = 'dndpvpcover';
    const version = '0.1.0';
    API_Meta.dndpvpcover.version = version;
    const lastUpdate = 1717964667;
    const schemaVersion = 0.1;

    // Check current state version and update it to match most recent version
    const checkInstall = () =>  {
        log(`-=> ${scriptName} v${version} <=-  [${new Date(lastUpdate*1000)}]`);

        if( ! state.hasOwnProperty(scriptName) || state[scriptName].version !== schemaVersion) {
            log(`  > Updating Schema to v${schemaVersion} <`);
            switch(state[scriptName] && state[scriptName].version) {

                case 0.1:
                    /* break; // intentional dropthrough */ /* falls through */

                case 'UpdateSchemaVersion':
                    state[scriptName].version = schemaVersion;
                    break;

                default:
                    state[scriptName] = {
                        version: schemaVersion
                    };
                    break;
            }
        }
    };

    // Handles all input from chat messages
    const handleInput = (msg) => {
        // Disregard non-API messages
        if (msg.type !== "api") {
            return;
        }

        // Execute commands matching specified patterns
        let args = msg.content.split(/\s+/);
        switch(args[0]) {
            case '!dndpvpcover':
                break;
        }
    };

    // Subscribe to chat messages with handleInput
    const registerEventHandlers = () => {
        on('chat:message', handleInput);
    };

    // Initialize this script once the game has loaded
    on('ready', () => {
        checkInstall();
        registerEventHandlers();
    });

    // Public interface
    return {};

})();

// Complete ScriptInfo initialization
{ try { throw new Error(''); } catch (e) { API_Meta.dndpvpcover.lineCount = (parseInt(e.stack.split(/\n/)[1].replace(/^.*:(\d+):.*$/, '$1'), 10) - API_Meta.dndpvpcover.offset); } }

// Empty line below to ensure other scripts do not fail