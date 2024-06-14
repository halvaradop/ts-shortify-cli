#! /usr/bin/env node

import "dotenv/config"
import { Command } from "commander"



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
    .option("-l, --long", "Show the long version of a link");


/**
 * Parse the command line arguments
 */
program.parseAsync(process.argv)
