export interface BackendResponse<T> {
    data: T;
    error?: string;
}
