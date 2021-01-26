import {PipeTransform} from "@angular/core"
import {Pipe} from "@angular/core"

@Pipe({
    name: 'dateFormat'
})

export class DateFormatPipe implements PipeTransform {
    transform(target: any) {
        return target.substring(0, 10);
    }
    
}