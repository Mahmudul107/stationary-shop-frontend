export type TRole = "user" | "admin";

export type TUserRes = {
  _id: string;
  email: string;
  name: string;
  role: TRole;
  address?: string;
  phone?: string;
  status: 'active' | 'inactive';
  isDeleted: boolean;
};
