import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope: Scope.REQUEST})
export class CoffeeService {
    data = [{
        id: 1,
        name: "Saurav",
        surname: "Maherchandani",
        age: 22
    },{
        id: 2,
        name: "Sam",
        surname: "Maher",
        age: 19
    }]

    findDataFromService(){
        console.log("Inside")
        return this.data;
    }
}
