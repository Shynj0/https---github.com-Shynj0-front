import { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";

export function useLottery() {
    return useContext(LotteryContext);
}
