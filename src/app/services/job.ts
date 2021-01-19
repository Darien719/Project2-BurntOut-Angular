import { Application } from "./application";
import { Tag } from "./tag";

export interface Job {
    title : string;
    description : string;
    tagList : Tag [];
    postingId : number;
    applicationList : Application [];
}