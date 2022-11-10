import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { DevelopmentConfig } from './developmentConfig.service';
import { ProductionConfig } from './productionConfig.service';

const configSetting = "PRODUCTION"

@Module({
    providers: [{
        provide: ConfigService,
        // useClass: configSetting === "PRODUCTION" ? ProductionConfig : DevelopmentConfig
        useFactory: ()=> {
            if(configSetting === "PRODUCTION")
                return ProductionConfig;
            else
                return DevelopmentConfig
        }
        // USerfactory returns a value ({not sure about this:} which is then set to useValue)
    }]
})
export class ConfigModule {}
