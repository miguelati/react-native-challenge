import client from './client';

export interface GetListParams {
  search?: string;
  ids?: string;
  limit?: number;
  offset?: number;
}

export interface GetListResponse {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export const getList = async (params?: GetListParams) => {
  const onSuccess = (response: any) => {
    const {data} = response;
    return data;
  };
  const onError = (error: Error) => {
    return Promise.reject(error);
  };
  return client.get('/assets', {params}).then(onSuccess).catch(onError);
};

export const getDetail = async (id: string) => {
  const onSuccess = (response: any) => {
    const {data} = response;
    return data;
  };
  const onError = (error: Error) => {
    return Promise.reject(error);
  };
  return client.get(`/assets/${id}`).then(onSuccess).catch(onError);
};
