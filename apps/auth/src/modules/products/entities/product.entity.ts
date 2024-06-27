import { User } from '@prisma/client';

export class Product {
  public name: string;
  public psw: string;
  public email: string;
  public credits: number;
  public level: number;
  public user: any;
}
