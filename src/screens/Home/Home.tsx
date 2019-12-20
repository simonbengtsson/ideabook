import React from "react";
import {ideasModel} from "../../mockData";
import {IdeaRow} from "../Idea/Row";
import {FaUserCircle, IoMdAdd, IoMdMegaphone} from "react-icons/all";
import {primaryColor} from "../../common/common";
import {useHistory} from "react-router";

export const HomeScreen: React.FC = () => {
  let history = useHistory();
  const listItems = Object.values(ideasModel).map((idea, index) => {
    return <IdeaRow key={index} idea={idea} index={index} />
  });
  return (
    <div>
      <header style={{display: 'flex', alignItems: 'center', paddingBottom: 30}}>
        <IoMdMegaphone style={{fontSize: 50, paddingRight: 16}}/>
        <div>
          <div style={{color: primaryColor, fontWeight: 700, fontSize: 24}}>Ideabook</div>
          <div style={{color: '#666',}}>Publish all ideas</div>
        </div>
        <div style={{marginLeft: 'auto', fontSize: 28}}>
          <IoMdAdd style={{paddingRight: 16}} onClick={() => history.push('/ideas/add')} />
          <FaUserCircle/>
        </div>
      </header>
      <main>
        <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>{listItems}</ul>
      </main>
    </div>
  );
};