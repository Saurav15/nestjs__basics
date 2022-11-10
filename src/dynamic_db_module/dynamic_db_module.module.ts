import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';
import { createConnection } from 'typeorm';

@Module({})
export class DynamicDbModuleModule {
    static register(options: ConnectionOptions): DynamicModule{
        return {
            module: DynamicDbModuleModule,
            providers:[
                { 
                    provide: 'CONNECTION',
                    useValue: createConnection(options)
                }
            ]
        }
    }
}
