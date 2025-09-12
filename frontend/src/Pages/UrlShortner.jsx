import { Container, TextInput } from '@mantine/core'
import {UrlForm} from '../Components/UrlForm.jsx'
import {UrlResponse} from '../Components/UrlResponse.jsx';
import { useState } from 'react';


export  function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
   )
}

