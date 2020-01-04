import React from "react";
import {ideasModel} from "../../mockData";
import {IdeaRow} from "../Idea/Row";
import {Navbar, NavbarButton, Page} from "../../common/Navbar";
import {IoMdAdd, IoMdMegaphone} from "react-icons/all";
import {primaryColor, secondaryText} from "../../common/common";
import {useHistory} from "react-router";

export const HomeScreen: React.FC = () => {
  let history = useHistory();
  const listItems = Object.values(ideasModel).map((idea) => {
    return <IdeaRow key={idea.id} idea={idea} />
  });

  return (
    <div>
      <Navbar>
        <IoMdMegaphone style={{fontSize: 50, paddingRight: 16}}/>
        <div>
          <div style={{color: primaryColor, fontWeight: 700, fontSize: 24}}>Ideabook</div>
          <div style={{color: '#666',}}>Publish all ideas</div>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <NavbarButton style={{marginLeft: 'auto'}} onClick={() => history.push('/ideas/add')}>
            <IoMdAdd />
          </NavbarButton>
        </div>
      </Navbar>
      <Page style={{display: 'flex', flexFlow: 'column'}}>
        <section style={{flex: 10}}>
          <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>{listItems}</ul>
        </section>
        <div style={{flexBasis: '30px'}} />
        <section style={{marginTop: 7, flex: 4}}>
          <h4 style={{margin: 0, padding: 0}}>Experimentation Phase</h4>
          <p style={{...secondaryText, ...{padding: 0, marginTop: 10}}}>This is an early test of the Ideabook concept. If you want to be involved or read more checkout the project at <a href="https://findcollabs.com/project/ideabook-THuXaCkeadEjnufVb1vz">findcollab</a>.</p>
        </section>
      </Page>
    </div>
  );
};