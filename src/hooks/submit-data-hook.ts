import { useState } from "react";
interface IUseSubmitData<T> {
  messageError: string | null;
  submitData: (data: T) => Promise<void>;
}

function useSubmitData<T>(
  callback: (data: T) => Promise<void>
): IUseSubmitData<T> {
  const [error, setError] = useState<string | null>(null);

  const submitData = async (data: T) => {
    try {
      await callback(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return {
    messageError: error,
    submitData,
  };
}

export { useSubmitData };
