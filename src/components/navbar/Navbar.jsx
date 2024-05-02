import Logo from "./Logo";
import styles from "./styles.module.css"
import { useTheme } from '@mui/material/styles';
import { Searchbar } from "./Searchbar";
import { useMediaQuery, Hidden } from '@mui/material';
import { FeedBack } from "./FeedBack";

const Navbar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>
            <div className={styles.container}>
                <Hidden mdUp>
                        <Logo />
                        <FeedBack />
                </Hidden>
                <Hidden mdDown>
                    <Logo />
                    <Searchbar />
                    <FeedBack />
                </Hidden>
            </div>
        </>
    )
}

export default Navbar;