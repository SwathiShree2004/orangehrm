

export class Logger{

    private write(level:string,message:string):void{
        const time=new Date().toLocaleTimeString();
        console.log(`[${time}][${level}]${message}`);
    }
    info(message:string):void{
        this.write('INFO',message);
    }
    warn(message:string):void{
        this.write('WARN',message);
    }
    error(message:string):void{
        this.write('ERROR',message);
    }
}
export const logger =new Logger();