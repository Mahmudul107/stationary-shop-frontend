import { jwtDecode } from "jwt-decode";
import { TUser } from "@/redux/features/auth/authSlice";

const handleJwtTokenDecode = (token: string): TUser => {
  const decodedData = jwtDecode<TUser>(token);
  return decodedData;
};

export default handleJwtTokenDecode;
