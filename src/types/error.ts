export type TError = {
    data:
      | {
          error: {
            path: string;
            message: string;
          }[];
          message: string;
          stack: string;
          success: boolean;
          statusCode: number;
        }
      | {
          success: boolean;
          message: string;
          error: string;
        };
    status: number;
  };
  