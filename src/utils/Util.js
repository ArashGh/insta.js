'use strict'

const fs = require('fs')
const {
    IgApiClientExt
} = require('instagram_mqtt')

/**
 * Multiple static utility function
 */
class Util {
    /**
     * Check if query is an id
     * @param {string} query The query to checked
     * @return {boolean}
     */
    static isID(query) {
        return !isNaN(query)
    }

    /**
     * Match admin path
     * @param {string} query URL path to match
     * @param {boolean} extract Whether it should return the extracted data from the query
     * @return {string[]|boolean}
     */
    static matchAdminPath(query, extract) {
        const isMatched = /\/direct_v2\/threads\/(\d+)\/admin_user_ids\/(\d+)/.test(query)
        return extract ? query.match(/\/direct_v2\/threads\/(\d+)\/admin_user_ids\/(\d+)/).slice(1) : isMatched
    }

    /**
     * Match message path
     * @param {string} query URL path to match
     * @param {boolean} extract Whether it should return the extracted data from the query
     * @return {string[]|boolean}
     */
    static matchMessagePath(query, extract) {
        const isMatched = /\/direct_v2\/threads\/(\d+)\/items\/(\d+)/.test(query)
        return extract ? query.match(/\/direct_v2\/threads\/(\d+)\/items\/(\d+)/).slice(1) : isMatched
    }

    /**
     * Match inbox thread path
     * @param {string} query URL path to match
     * @param {boolean} extract Whether it should return the extracted data from the query
     * @return {string[]|boolean}
     */
    static matchInboxThreadPath(query, extract) {
        const isMatched = /\/direct_v2\/inbox\/threads\/(\d+)/.test(query)
        return extract ? query.match(/\/direct_v2\/inbox\/threads\/(\d+)/).slice(1) : isMatched
    }

    /**
     * Check if message is valid
     * @param {Message} message
     * @return {boolean}
     */
    static isMessageValid(message) {
        return ((message.timestamp / 1000) + 10000) > Date.now()
    }

    /**
     * Saves the state of the api client to state.json
     * @param {IgApiClientExt} ig the instagram api client
     */
    static async saveFile(ig) {
        const exportedState = await ig.exportState()
        return fs.writeFileSync('state.json', exportedState, {
            encoding: 'utf8'
        })
    }
    /**
     * Reads the state of the api client from state.json
     * @returns {string|boolean} the state from file
     */
    static readFile() {
        if (!fs.existsSync("state.json")) return false;
        return fs.readFileSync("state.json", {
            encoding: "utf8"
        });
    }
}

module.exports = Util