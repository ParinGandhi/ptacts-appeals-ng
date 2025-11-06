import { ViewLayoutData } from './ViewLayoutData.model';
import { WidgetData } from './WidgetData.model';

export interface Widget {
  configText: string;
  dataUrlText?: string;
  widgetColor: string;
  widgetCustomName: string;
  widgetData: WidgetData;
  userWorkspaceWidgetIdentifier: number;
  widgetHeightPixelQuality: string;
  widgetPositionText: string;
  zoneWidth: number;
  viewLayoutData: ViewLayoutData;
}
