export interface DisplayMessage {
  id: string;
  role: "owner" | "weaver";
  content: string;
  streaming?: boolean;
}
