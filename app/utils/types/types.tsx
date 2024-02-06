export type Node = {
  id: string;
  type: string;
  collectsFrom: string;
  baseConnectsTo: string;
}

export type NodeState = Node & {
  collectorOn: boolean;
  baseOn: boolean;
}