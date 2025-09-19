import { Container, TextInput } from '@mantine/core'
import {UrlForm} from '../Components/UrlForm.jsx'
import { useState } from 'react';
import { UrlResponse } from '../Components/UrlResponse.jsx';

export function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse setResponse={setResponse} response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>

   )
}

