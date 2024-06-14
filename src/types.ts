
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
    data: BaseLink
}

export interface CLIOptions {
    stats: boolean,
    update: boolean,
    delete: boolean,
    domain: boolean,
    views: boolean,
    long: boolean
}
