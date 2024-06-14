
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
    delete: boolean,
    domain: boolean,
    views: boolean,
    long: boolean
}


export interface StatisticsAPI {
    clicks: number,
    unique_clicks: number,
    total_qr_scans: number,
    browsers: unknown,
    countries: unknown,
    referres: unknown,
    platforms: unknown,
    daily_clicks: unknown,
    data: {
        long_url: string,
        smart_urls: string[],
        short_url: string,
        create_At: Date,
        last_clicked: Date,
        total_clicks_last_thirty_days: number
    }
}