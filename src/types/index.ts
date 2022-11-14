interface Base {
  id?: string;
  createUser?: string;
  createTime?: string;
  updateUser?: string;
  updateTime?: string;
}

export declare interface User extends Base {
  name: string;
  address: string;
}

export declare interface Goods extends Base {
  name: string;
  price: number;
  number: number;
}
