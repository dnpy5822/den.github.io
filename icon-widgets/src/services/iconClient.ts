import { BaseClientService } from './baseClientService';

const iconClient = BaseClientService({
  baseURL: process.env.API_BASE_URL,
});

export default { ...iconClient };
