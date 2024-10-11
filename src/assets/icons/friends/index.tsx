import { FC } from "react"
import { NavigationItemPayload } from "../types"

const FriendsIcon:FC<NavigationItemPayload> = ({ activeKey }) => {
  return (
    <div className="h-[48px] flex justify-center items-center hover:bg-gray-100 rounded-[5px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 640 512"><path fill={activeKey == 'friends' ? '#1877F2' : 'black'} d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2M480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96m48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112"/></svg> 
    </div>
  )
}

export default FriendsIcon