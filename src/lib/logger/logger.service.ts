@injectable({providedIn: 'root'})
export class LoggerService{
  info(message:string):void{

  }

}
function injectable(arg0: { providedIn: string; }): (target: typeof LoggerService) => void | typeof LoggerService {
  throw new Error("Function not implemented.");
}

