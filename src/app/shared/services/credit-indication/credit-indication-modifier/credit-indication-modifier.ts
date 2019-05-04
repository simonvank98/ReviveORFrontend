export class CreditIndicationModifier {
    id: number;
    product_category_id: number;
    criterion_id: number;
    effect: number;
    created_at: string;
    updated_at: string;
    criterion: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
    };
    category: {
        id: number;
        name: string,
        created_at: string;
        updated_at: string;
    };
}
