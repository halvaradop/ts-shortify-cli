import { ToSnakeCase } from "./utility-types"

export interface ExpiredLink {
    expireAtDatetime: Date,
    expireAtViews: number,
}

export interface LinkClickStatistics {
    clicks: number,
    uniqueClicks: number
}

export interface LinkCreationInfo {
    createdAt: string,
    updtedAt: string
}

export interface LinkExtraMetadata {
    tags: number[],
    pixels: number[]
}

export interface LinkAccess {
    publicStats: boolean
}

export interface BaseLink {
    longUrl: string,
    shortUrl: string,
    shortId: string,
    domain: string,
    description: string,
}

export interface QrCode {
    qrCodeUrl: string,
    qrCodeBase64: string
}

export interface ShortenLink extends BaseLink, ExpiredLink, LinkAccess, LinkCreationInfo { }

export interface ErrorRequest {
    message: string
}

export interface StatisticsLink extends LinkClickStatistics {
    data: Pick<BaseLink, "longUrl" | "shortUrl"> & Pick<LinkCreationInfo, "createdAt">
}

export interface CLIOptions {
    stats: boolean,
    update: boolean,
    remove: boolean,
    domain: string,
    views: boolean,
    long: boolean,
    create: boolean,
    description: string,
    shortId: string,
    expireViews: string
}

export interface ShortenLinkAPI extends ToSnakeCase<Omit<BaseLink, "description">>, LinkExtraMetadata {}

export interface StatisticsAPI extends ToSnakeCase<LinkClickStatistics> {
    total_qr_scans: number,
    data: {
        long_url: string,
        smart_urls: string[],
        short_url: string,
        create_at: Date,
        last_clicked: Date,
        total_clicks_last_thirty_days: number
    }
}

export interface ShortenOptions extends ToSnakeCase<Pick<BaseLink, "shortId" | "domain" | "description">>, ToSnakeCase<Pick<ExpiredLink, "expireAtViews">> {}