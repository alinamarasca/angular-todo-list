export interface TodoItem {
  id: String;
  title: String;
  description?: string;
  dateAdded: Date;
  isDone: boolean;
}
