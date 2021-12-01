import axios, { AxiosResponse } from 'axios';
import BASE_URL from './baseURL';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAllItems = (): Promise<AxiosResponse<AxiosResponse>> => {
  return instance.get(`/vehicles`);
};

export const getItemById = (id): Promise<AxiosResponse<AxiosResponse>> => {
  return instance.get(`/vehicles/${id}`);
};

export const createItem = (item): Promise<AxiosResponse<AxiosResponse>> => {
  const { year, brand, model, imageUrl, location, status, mileage, price } =
    item;
  return instance.post(`/vehicles`, {
    year,
    brand,
    model,
    imageUrl,
    location,
    status,
    mileage,
    price,
  });
};

export const updateItem = (item): Promise<AxiosResponse<AxiosResponse>> => {
  const { year, brand, model, imageUrl, location, status, mileage, price, id } =
    item;
  return instance.patch(`/vehicles/${id}`, {
    year,
    brand,
    model,
    imageUrl,
    location,
    status,
    mileage,
    price,
  });
};

export const removeItem = (id): Promise<AxiosResponse<AxiosResponse>> => {
  return instance.delete(`/vehicles/${id}`, { data: { id } });
};
