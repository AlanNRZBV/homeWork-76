export interface IMessagesItem {
  message: string;
  author: string;
  date: string;
  id?: string;
}

export interface IMessages {
  messages: IMessagesItem[]
  isLoading: boolean
}