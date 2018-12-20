export interface DeviceListConfig {
    type: string;
  
    filters: {
      Category?: string,
      limit?: number,
      offset?: number
    };
  }
  