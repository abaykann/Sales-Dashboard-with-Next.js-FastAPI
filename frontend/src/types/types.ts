export type Deal = {
  client: string;
  value: number;
  status: "Closed Won" | "In Progress" | "Closed Lost"; // Enforcing the specific string literals
};
