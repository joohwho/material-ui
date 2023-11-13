import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="logind_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
              <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
            </FormControl>
        </Grid>
    );
}

export default Login;

// '@mui/material/Box'; '@mui/material/Drawer'; '@mui/material/Button';
// '@mui/material/List'; '@mui/material/Divider'; '@mui/material/Listltem';
// '@mui/material/ListltemButton'; '@mui/material/Listltemlcon';
// '@mui/material/ListltemText'; '@mui/icons-material/MoveTolnbox';
// '@mui/icons-material/Mail';