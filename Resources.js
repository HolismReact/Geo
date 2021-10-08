import { CountryList } from "./Geo/Country/List";
import { Resource } from 'react-admin';

var resources = [
    <Resource name='countries' list={CountryList} />
]

export default resources;