export interface ORProduct {
    id?: number,
    name?: string,
    position?: number,
    weight?: number,
    url?: string,
    description?: string,

    category?: {
        id?: number,
        name?: string
    },

    images?: [{
        alt?: string,
        filename?: string,
        height?: number,
        width?: number,
        mimetype?: string,
        path?: string,
        title?: string,
        url?: string
    }],

    properties?: [{
        id?: number,
        name?: string,
        price?: number,
        supply?: number,
        value?: string
    }],

    thumbnail?: {
        alt?: string,
        filename?: string,
        height?: number,
        width?: number,
        mimetype?: string,
        path?: string,
        title?: string,
        url?: string
    }
}
