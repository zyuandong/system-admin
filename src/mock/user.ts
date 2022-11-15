import { Random } from 'mockjs';
import type { User } from '@/types/index';

const totalCount = Random.natural(0, 100);

const users: Array<User> = [];

for (let i = 0; i < totalCount; i++) {
  users.push({
    id: Random.id(),
    name: Random.cname(),
    address: Random.county(true),
  });
}

export default {
  userList: (name?: string) => {
    if (!name) {
      return { users };
    }
    return {
      users: users.filter((item) => item.name === name),
    };
  },
};
