import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../redux/slices/auth-slice";

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
};
