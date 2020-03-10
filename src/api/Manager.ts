import { Manager } from '@/api/types/Manager';
import AxiosInstance from '@/api/AxiosInstance';

export async function managerInfo(data: { id: string }) {
  const res = await AxiosInstance<Manager>('/info', 'get', data);
  return res.data;
}
