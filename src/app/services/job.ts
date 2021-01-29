import { Application } from "./application";
import { Tag } from "./tag";

//Job posting object
export interface Job {
    title : string;
    description : string;
    tagsList : Tag [];
    tagNames: string;
    postingId : number;
    locationName: string;
    companyName: string;
    industryName: string;
    poster_id: number;
}