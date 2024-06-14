import { StatisticsLink } from "./types"

/**
 * Check if the URL received is a valid URL or it throws an error
 * to notify that the URL passed is not valid.
 * 
 * @param url  link to be verified
 * @returns {true} whether the URL is valid
 */
export const checkValidUrl = (url: string): boolean => {
    return new RegExp("^(https?:\\/\\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?$", "i").test(url)
}


/**
 * Paints a message with a red color in the output terminal
 * using ANSI escape codes.
 * 
 * @param str The message to be printed in red
 * @returns The colored message as a string
 */
export const errorColor = (str: string) => {
    return `\x1b[31m${str}\x1b[0m`
}



/**
 * Transform the structure of an object received from the API
 * and map it to a new object with the values.
 * 
 * @param from The response received from the API.
 * @param to The structure expected to be transformed.
 * @returns An object of type 'to' with the values received from the API.
 */
export const mappingResponse = <From extends object, To extends object>(from: From, to: To): To => {
    return Object.keys(from).reduce((previous, key) => {
        const entryKey = underscoreToUppercase(key)
        if (entryKey in to) {
            return {
                ...previous,
                [entryKey]: from[key as keyof object],
            }
        }
        return previous
    }, {} as To)
}


/**
 * Receives a string with underscores and changes the next character to uppercase.
 * 
 * @param str The string to be transformed to UpperCamelCase.
 * @returns The transformed string.
 */
const underscoreToUppercase = (str: string): string => {
    return str
        .split("_")
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
}


/**
 * Object used to initialize the mapping object.
 */
export const statisticsLinkInit: StatisticsLink = {
    clicks: 0,
    uniqueClicks: 0,
    data: {
        createdAt: "",
        longUrl: "",
        shortUrl: ""
    }
}