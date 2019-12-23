import React, {CSSProperties} from "react";

export const Navbar: React.FC<{}> = (props) => {
  return <header style={styles.navbarContainer}>
    {props.children}
  </header>
};

export const Page: React.FC<{style?: CSSProperties}> = (props) => {
  return <main style={{...styles.mainContainer, ...props.style}} className='main-page'>
    {props.children}
  </main>
};

export const NavbarButton: React.FC<{style?: CSSProperties, onClick: () => any}> = (props) => {
  return <button style={{...styles.navbarButton}} onClick={props.onClick} className='reset-a'>
    {props.children}
  </button>
};

const styles = {
  navbarButton: {
    padding: 16,
    fontSize: 28,
  },
  mainContainer: {
    padding: 20,
    paddingTop: 30,
    maxWidth: 1000,
    margin: '0 auto'
  },
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: '0px 0px 8px #aaa'
  }
};