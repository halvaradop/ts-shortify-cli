#! /usr/bin/env node

import "dotenv/config"
import { Command } from "commander"
import { getStats } from "./request"
import { CLIOptions } from "./types"
import { checkValidUrl, errorColor } from "./utils"



/**
 * Declare and initialize the program
 */
const program = new Command()


program
    .name("shortify url")
    .description("Shorten your favorite URL using the CLI.")
    .version("0.0.1")



/**
 * Configuration of CLI options and arguments
 */
program
    .argument("<source-url>", "URL to shorten")
    .option("-s, --stats", "Show the statistics for a URL")
    .option("-u, --update", "Update the current link")
    .option("-d, --delete", "Delete the current link")
    .option("-dm, --domain <domain>", "Insert your custom domain")
    .option("-v, --views", "Show the views by a short link")
    .option("-l, --long", "Show the long version of a link")
    .action(async (source: string, options: CLIOptions) => {
        if(!checkValidUrl(source)) {
            program.error("Invalid URL, verify the structure of the link")
        }
    })
    .showHelpAfterError(errorColor("You can execute (url --help) for additional information"))
    .configureOutput({               
        writeErr: (error: string) => {            
            process.stdout.write(`${errorColor("[ERROR]:")} ${error}`)
        },        
        outputError: (str, write) => {
            write(errorColor(str))
        },
    })

/**
 * Parse the command line arguments
 */
program.parseAsync(process.argv)
