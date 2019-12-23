import React, {useState} from "react";
import {useParams} from "react-router";
import {Idea, ideasModel} from "../../mockData";
import {IoMdArrowBack, IoMdMegaphone} from "react-icons/all";
import {primaryColor, secondaryText} from "../../common/common";
import {MdClose} from "react-icons/all";
import {useHistory} from "react-router";
import {Navbar, NavbarButton, Page} from "../../common/Navbar";

export const IdeaForm: React.FC = () => {
  let history = useHistory();
  let params: any = useParams();
  const id = params.id || Object.values(ideasModel).length;
  const isCreating = params.id == null;
  let ideaInput: Idea;

  if (!isCreating) {
    ideaInput = ideasModel[id];
  } else {
    ideaInput = {
      name: '',
      teaser: '',
      icon: IoMdMegaphone,
      color: '#8ad0ff',
      voteCount: 24,
      votedAt: null,
      images: [],
      pitch: ''
    }
  }

  const [idea, setIdea] = useState(ideaInput);

  const saveClicked = () => {
    ideasModel[id] = {...idea};
    history.goBack()
  };

  return (
    <div>
      <Navbar>
        <NavbarButton onClick={() => history.goBack()}>
          <MdClose />
        </NavbarButton>
      </Navbar>
      <Page>
        <div className="page">
          <div style={{display: 'flex'}}>
            <div>
              <label style={{...styles.inputLabel}}>Name</label>
              <label style={{...styles.inputLabel}}>Teaser</label>
              <label style={{...styles.inputLabel}}>Pitch</label>
            </div>
            <div style={{flex: 2, display: 'flex', flexDirection: 'column'}}>
              <input className="input" type="text" value={idea.name} style={styles.ideaInput} onChange={e => { setIdea({...idea, name: e.target.value})  }} />
              <input className="input" value={idea.teaser} style={styles.ideaInput} onChange={e => { setIdea({...idea, teaser: e.target.value})  }} />
              <input className="input" value={idea.pitch} style={styles.ideaInput} onChange={e => { setIdea({...idea, pitch: e.target.value})  }} />
            </div>
          </div>
          <button onClick={() => saveClicked() } style={{...styles.fullButton, ...{marginTop: 28}}}>{isCreating ? 'Add' : 'Update'}</button>
        </div>
      </Page>
    </div>
  );
};

const styles = {
  fullButton: {backgroundColor: primaryColor, padding: 8, color: 'white', fontSize: 18, borderRadius: 100, border: 0, width: '100%'},
  ideaInput: {
    marginLeft: 18,
    flex: 1,
    marginBottom: 18
  },
  inputLabel: {
    marginBottom: 18,
    display: 'block',
    ...secondaryText,
    lineHeight: '38px',
  }
};