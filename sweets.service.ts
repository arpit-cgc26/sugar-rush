
import { Injectable } from '@nestjs/common';

@Injectable()
export class SweetsService {
  private sweets:any[] = [];

  create(data: any) {
    this.sweets.push(data);
    return data;
  }

  findAll() {
    return this.sweets;
  }

  purchase(index: number, qty: number) {
    this.sweets[index].quantity -= qty;
    return this.sweets[index];
  }
}
