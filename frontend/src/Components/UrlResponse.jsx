import { Text } from '@mantine/core';
import Service from '../utils/http'
import {QRCodeSVG} from "qrcode.react"

const obj = new Service();

export const UrlResponse = (props) =>{
   const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
   console.log("THis is surl " + surl);
   return (
       <div>
           <Text color = "blue">{surl}</Text>
       </div>
   )
}
