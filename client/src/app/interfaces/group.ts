export interface Group {
  id: string;
  title: string;
  description: string;
  color: string;
  iconUrl: string | null;
}

export interface CreateGroupPayload {
  title: string;
  description: string;
  color: string;
  iconFile?: File | null;
}
