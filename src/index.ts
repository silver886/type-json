type JsonPrimitive = string | number | boolean | null

type JsonValue = JsonPrimitive | JsonArray | JsonObject

interface JsonArray extends Array<JsonValue> { } // eslint-disable-line @typescript-eslint/no-empty-interface

interface JsonObject extends Record<string, JsonValue> { } // eslint-disable-line @typescript-eslint/no-empty-interface

type JsonCompatible<T> = {
    [P in keyof T]: T[P] extends JsonValue ?
    T[P] : Pick<T, P> extends Required<Pick<T, P>> ?
    never : T[P] extends (() => any) | undefined ? // eslint-disable-line @typescript-eslint/no-explicit-any
    never : JsonCompatible<T[P]>;
};

export {
    JsonPrimitive as Primitive,
    JsonValue as Value,
    JsonArray as Array,
    JsonObject as Object,
    JsonCompatible as Compatible,
};
