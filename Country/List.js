import { List, Datagrid, TextField } from 'react-admin';

// https://flagcdn.com/

export const CountryList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="officialName" />
            <TextField source="alternativeName" />
            <TextField source="isoTwoLetterCode" />
            <TextField source="isoThreeLetterCode" />
            <TextField source="cctld" />
        </Datagrid>
    </List>
);