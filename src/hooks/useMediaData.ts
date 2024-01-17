import axios, { AxiosResponse } from "axios";
import { MediaData } from "../interface/MediaData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): Promise<AxiosResponse<MediaData[]>> => {
    try {
        const response = await axios.get<MediaData[]>(API_URL + '/series');
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error or handle it as needed
    }
}

export function useMediaData() {
   const query = useQuery({
    queryFn: fetchData,
    queryKey: ['media-data'],
    retry: 2
   })

   return{
    ...query,
    data: query.data?.data
   }
}
