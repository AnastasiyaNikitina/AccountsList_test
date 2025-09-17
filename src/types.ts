export type NameFieldType = 'mark' | 'type' | 'login' | 'password';

export type MarkType = { text: string };

export interface RecordType {
    id: number,
    mark: Array<MarkType>,
    type: string,
    login: string,
    password: string
}