import type{Locator} from '@playwright/test'
import { logger } from '../logger/logger'

export class CommonActions{
    async fillText(locator:Locator,value:string,fieldName:string):Promise<void>{
        try{
            logger.info(`entering value in ${fieldName}`);
            await locator.fill(value);
        }catch(error){
            logger.error(`could not enter value in ${fieldName}`);
            throw error;
        }
    }
    async ClickElement(locator:Locator,elementName:string):Promise<void>{
        try{
            logger.info(`entering ${elementName}`);
            await locator.click();
        }catch(error){
            logger.error(`could not click in ${elementName}`);
            throw error;
        }

    }
}