export class ORProduct {
    constructor(
        public id?: number,
        public name?: string,
        public position?: number,
        public weight?: number,
        public url?: string,
        public description?: string,

        public category?: {
            id?: number,
            name?: string
        },

        public images?: [{
            alt?: string,
            filename?: string,
            height?: number,
            width?: number,
            mimetype?: string,
            path?: string,
            title?: string,
            url?: string
        }],

        public properties?: [{
            id?: number,
            name?: string,
            price?: number,
            supply?: number,
            value?: string
        }],

        public thumbnail?: {
            alt?: string,
            filename?: string,
            height?: number,
            width?: number,
            mimetype?: string,
            path?: string,
            title?: string,
            url?: string
        }
    ) {}

    public isType(type: string) {
        return this.category.name.toLowerCase() === type;
    }

    public isMaterial(material: string) {
        const name = this.name.toLowerCase();
        if (material === 'other') {
            return !name.includes('gold') && !name.includes('silver');
        } else {
            return name.includes(material);
        }
    }
}
