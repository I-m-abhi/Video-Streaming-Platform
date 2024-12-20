import { useDispatch } from "react-redux";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(openMenu());
  }, []);

  return (
    <div>
      <ButtonsList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer;
