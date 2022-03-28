import { DisplayState } from "../../type";

export enum CanvasActionType {
  CANVAS_UPDATE = "CANVAS_UPDATE",
}

interface canvasUpdate {
  type: CanvasActionType.CANVAS_UPDATE;
  payload: DisplayState;
}

export type CanvasAction = canvasUpdate;
