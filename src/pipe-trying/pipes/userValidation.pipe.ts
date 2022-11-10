import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { User } from '../dto/user.dto';

// We need to write this validation pipe every time in order to use the validation. As the class-validator as the name suggests only works when we pass the class or it will not work. Thiu we need to convert the given obj to the class and then perform validation to it. we use class-transformer package to do it.

// This in second step we use validate method provided by class-validator which takes the obj (converted to class) and a dto class by which we need to verify it.

@Injectable()
export class userValidation implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log("From validation PIPE!");
    console.log(value)
    console.log(metadata)

    // First convert the User Obj to the class.
    const userClass = plainToInstance(User,value);
    console.log(userClass)

    // Now run all the validator methods that are used by the DTO in the form of decorators.
    const errors = await validate(userClass)
    console.log(errors)

    if(errors.length > 0){
      throw new BadRequestException({error: errors})
    }
    return value;
  }
}


// We dont need to write this custom validation class again and again for basic validation. So insted we can use "new validationPipe" method