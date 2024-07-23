import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import styles from "./Menu1.module.css";
import Link from "next/link";

const BurgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  // bg color switch logic
  const [isScrolled, setIsScrolled] = useState(false);
  const [linkStyle, setLinksStyle] = useState('linksBeforeScroll')

  useEffect(()=>{
    if(isScrolled)
    {
      setLinksStyle('linksBeforeScroll')
    }
    else 
    {
      setLinksStyle('linksAfterScroll')
    }
  },[isScrolled])

  
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        borderBottom: "2px solid white",
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.5)' : 'white',
        backdropFilter: "blur(2px)",
      }}
    >
      <Toolbar>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/landing/logo.png" alt="logo"/>
          </Link>
        </div>
        {isMobile && (
          <IconButton
            className={styles.iconButton}
            size="large"
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer}
            style={{
              color: isScrolled ? 'white':'black'
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer anchor="top" open={isDrawerOpen} onClose={handleClose}>
          <div role="presentation" onClick={handleClose} onKeyDown={handleClose}>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/#hero">Acasă</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/#servicii">Servicii</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/#Integrare">Integrare</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/#intrebari">Intebari</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/contact">Contact</Link>
            </MenuItem>
          </div>
        </Drawer>
        {!isMobile && (
          <ul className={styles.desktopNav}>
            <li>
              <Link href="/#hero" className={styles[linkStyle]} >
              Acasă
              </Link>
            </li>
            <li>
              <Link href="/#servicii" className={styles[linkStyle]} >
                Servicii
              </Link>
            </li>
            <li>
              <Link href="/#integrare" className={styles[linkStyle]} >
                Integrare
              </Link>
            </li>
            <li>
              <Link href="/#intrebari" className={styles[linkStyle]}>
                Intrebari
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles[linkStyle]} >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BurgerMenu;
