export interface MainLS {
  Name: string;
  Positions: {
    Name: string;
    Id: number;
  }[];
}
export interface ListOfTasks {
  Name: string;
  Code?: String;
  Open: boolean;
  MainItem: boolean;
  SubList?: ListOfTasks[];
}
export interface Task {
  Title: string;
  Code: string;
  Steps: {
    Explaniation: {
      Text: string;
      Count: number;
    }[];
    Screans: string[];
  }[];
}
