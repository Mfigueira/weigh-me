export interface Weighing {
  id?: number;
  weight: number;
  datetime: string;
}

export interface User {
  username: string;
  password: string;
  confirmation?: string;
}

export interface Profile {
  username: string;
}
