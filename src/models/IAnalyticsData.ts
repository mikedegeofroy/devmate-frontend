import { IDataPoint } from './IDataPoint';

export interface IAnalyticsData {
  dataPoints: IDataPoint[],
  total: number
}