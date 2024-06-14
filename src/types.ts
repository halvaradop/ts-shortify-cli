
export interface Link {
    long_url: string,
    short_id: string,
    domain: string,
    expire_at_datetime: Date,
    expire_at_views: number,
    description: string,
    public_stats: boolean,
    tags: number[],
    pixels: number[]
}

export interface QuickResponse {
    qr_code_url: string,
    qr_code_base64: string
}

export interface ErrorRequest {
    message: string
}

export interface StatisticsAPI extends Link, QuickResponse {

}