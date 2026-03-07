export type SearchParamValue = string | string[] | undefined;

export type HomePageSearchParams = Promise<Record<string, SearchParamValue>>;