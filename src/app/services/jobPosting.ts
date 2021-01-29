import { Tag } from "./tag";

//Job posting object
export interface JobPosting {
    company_id: number;
    poster_id: number;
    title: string;
    location_id: number;
    industry_id: number;
    location_name: string;
    industry_name: string;
    description: string;
    tagsList : Tag [];
}