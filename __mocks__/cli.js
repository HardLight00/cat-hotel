module.exports = {
    getConfig() {
        return require('../ijl.config').config
    },

    getNavigations() {
        return require('../ijl.config').navigations
    }
}