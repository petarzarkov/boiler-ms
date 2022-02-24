import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getBoiler(): string {
    return "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtFhiT13UrnLCkH1wIAalC_habI7mSfbn9g&usqp=CAU' />";
  }
}
