
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