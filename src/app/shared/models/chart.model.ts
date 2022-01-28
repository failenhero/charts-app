import {MetaInfo} from "./meta-info.model";
import {SensorReadings} from "./sensor-readings.model";

export interface Chart {
  metaInfo: MetaInfo,
  sensorReadings: SensorReadings,
  chartId?: string
}
