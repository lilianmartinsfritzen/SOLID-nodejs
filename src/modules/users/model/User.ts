import { v4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
      this.admin = false;
    }
  }
}

export { User };
