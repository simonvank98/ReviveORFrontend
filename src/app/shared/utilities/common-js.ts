
export class CommonJs {

    public static isJSONObject(item) {
        return item.constructor === Object;
    }


    public static isValidJSONObjectOrArray(item) {
        if (this.isJSONObject(Object(item))) {
            return true;
        } else if (item instanceof Array) {
            try {
                JSON.parse(JSON.stringify(item));
            } catch (e) {
                return false;
            }
        }
        return false;
    }
}
