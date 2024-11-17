import axios from "axios";

export const baseUrl='https://bayut.p.rapidapi.com';

export const fetchApi=async(url)=>{
    const {data}=await axios.get((url),{
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '25c3dae5ecmsh77bc657a93dddecp1c520cjsn69a85acda59d'
              }
    })
    return data;
}