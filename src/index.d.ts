// Typings for [GreenwichDB](https://github.com/greenwichdb/greenwichdb)

interface GreenwichDB {
    GetDB(name: string): Database,
    EndQueue(): void
}

interface Database {
    set<T>(key: string, value: T, shouldSave?: boolean): T,
    Set<T>(key: string, value: T, shouldSave?: boolean): T,

    get<T>(key: string): T | undefined,
    Get<T>(key: string): T | undefined,

    delete(key: string): boolean,
    Delete(key: string): boolean,

    has(key: string): boolean,
    Has(key: string): boolean,

    save(key: string): boolean,
    Save(key: string): boolean,

    fetch(key: string): boolean,
    Fetch(key: string): boolean,

}