import UrlShortenerService from "@/services/UrlShortnerService";
import { redirect } from "next/navigation";

async function fetchOriginalUrl(url :string){
    const urlService = new UrlShortenerService();
    const response =  await urlService.getUrlByShortUrl(url);
    return response?.originalUrl;
}

export default async function UrlRedirect({params}: {params: {id: string}}){
    console.log(params.id);
    const og = await fetchOriginalUrl(`urls/${params.id}`)
    if(og) redirect(og);
    redirect('/404');
    return null
    
}