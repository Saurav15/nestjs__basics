import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeMockService {

    findDataFromService(){
        return {
            id: 12,
            name: "Mock Name",
            surname: "Mock Surname",
            age: 123
        }
    }
}