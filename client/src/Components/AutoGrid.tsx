import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Resume from '../Assets/Patrick Hart - Resume.pdf'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box 
        sx={{ flexGrow: 1 }}
        style={{ padding: '1vh'}}
    >
      <Grid container spacing={2}>
        <Grid item xs>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
            <Item>
                <iframe
                    title="Resume"
                    src={ `${Resume}#view=FitH` }
                />
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}