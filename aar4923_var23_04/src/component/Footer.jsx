import {Component} from "react";
import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Links from "../data/footer.json";
import "./../style/fooder.css";

export class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <Toolbar>
                        <Box sx={{
                            display: { xs: 'flex', sm: 'flex' },
                        }}>
                            {Links.map((item) => (
                                <ListItem key={item.id}  disablePadding>
                                    <ListItemButton className={'footerBtn'}   sx={{textAlign: 'center'}} href={item.link}>
                                        <ListItemText className={'footerBtnText'} primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </Box>
                    </Toolbar>
                </footer>
            </>
        );
    }
}